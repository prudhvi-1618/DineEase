const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const menuItemRouter = require("./routes/menuItem.js")
const orderRouter = require("./routes/order.js")

const {connectMongoDb} = require('./config/MongoDbConnect.js');


const createOrderandItemTable = require("./data/createTable.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT||3001

//Middlewares
app.use(express.json());
app.use(cors());

//DB connection
connectMongoDb();


//create order and order item table
createOrderandItemTable();

//Routes
app.use("/api/menu",menuItemRouter);
app.use("/api/order",orderRouter);



//Server Running
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`);
    
});