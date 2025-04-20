const pool = require("../config/postgresConnect");

async function orderCreateService(customer_name, phone_number) {
    try {
        const orderQuery = `
            INSERT INTO orders (customer_name, phone_number)
            VALUES ($1, $2) RETURNING id
        `;
        const orderResult = await pool.query(orderQuery, [customer_name, phone_number]);
        return orderResult.rows[0].id; 
    } catch (err) {
        console.error("Error creating order:", err);
        throw new Error("Failed to create order");
    }
}

async function orderItemCreateService(orderId, item) {
    try {
        const orderItemQuery = `
            INSERT INTO order_item (order_id,item_name, item_id, quantity, price)
            VALUES ($1, $2, $3, $4,$5)
        `;
        await pool.query(orderItemQuery, [orderId, item.name, item.item_id, item.quantity, item.price]);
    } catch (err) {
        console.error("Error creating order item:", err);
        throw new Error("Failed to create order item");
    }
}

async function orderAllGetService() {
    try {
        const orderQuery = `
            SELECT * FROM orders;
        `;
        const result = await pool.query(orderQuery);
        return result.rows;
    } catch (err) {
        console.error("Error fetching all orders:", err);
        throw new Error("Failed to fetch orders");
    }
}

async function orderGetServiceById(id) {
    try {
        const orderQuery = `
            SELECT 
            o.id AS order_id, o.customer_name, o.phone_number, o.created_at,
            oi.item_name, oi.quantity, oi.price
            FROM orders o
            JOIN order_item oi 
            ON o.id = oi.order_id
            WHERE o.id = $1;
        `;
        const result = await pool.query(orderQuery, [id]);
        if (result.rows.length === 0) {
            return null; 
        }
        return result.rows;
    } catch (err) {
        console.error("Error fetching order by ID:", err);
        throw new Error("Failed to fetch order");
    }
}

async function orderGetServiceByPhoneNumber(phone_number) {
    try {
        const orderQuery = `
            SELECT id as order_id
            FROM orders 
            WHERE phone_number = $1;
        `;
        const result = await pool.query(orderQuery, [phone_number]);
        return result.rows;
    } catch (err) {
        console.error("Error fetching orders by phone number:", err);
        throw new Error("Failed to fetch orders by phone number");
    }
}

module.exports = {
    orderCreateService,
    orderItemCreateService,
    orderAllGetService,
    orderGetServiceById,
    orderGetServiceByPhoneNumber
};
