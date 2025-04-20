const pool = require('../config/postgresConnect');

const enableUuid = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

const ordersQuery = `
  CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name VARCHAR(255),
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const orderItemQuery = `
  CREATE TABLE IF NOT EXISTS order_item (
    id SERIAL PRIMARY KEY,
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    item_name VARCHAR(255),
    quantity INTEGER,
    price NUMERIC(10, 2),
    item_id TEXT
  );
`;

async function createTables() {
  try {
    await pool.query(enableUuid);
    await pool.query(ordersQuery);
    await pool.query(orderItemQuery);
    console.log("Tables created with UUID primary key for orders.");
  } catch (err) {
    console.error("Error creating tables:", err);
  }
}

module.exports = createTables;
