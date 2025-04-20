const dotenv = require("dotenv");
const pg = require('pg');
const {Pool} = pg;

dotenv.config();

const pool = new Pool({
    user: 'postgres',
    password: process.env.PG_PASSWORD,
    host:  process.env.PG_HOST,
    database: 'railway',
    port: process.env.PG_PORT,
})
pool.on("Connect",()=>{
    console.log("PostgresDB connetced");   
})

module.exports = pool;
