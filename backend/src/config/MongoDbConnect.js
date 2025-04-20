const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config()
async function connectMongoDb(){
    const url = process.env.MONGODB_URL
    return mongoose
    .connect(url)
    .then(()=>console.log("MongoDB Connected..."))
    .catch((err)=>console.log("Error Occured ..."+err))
}


module.exports = {
    connectMongoDb
}