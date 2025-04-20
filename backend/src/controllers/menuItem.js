const mongoose = require("mongoose")
const menuItem = require("../models/menuItem")

async function handleAllMenu(req,res){
    let items = await menuItem.find({});
    res.json({"response":items})
}

async function handleCreateMenuItem(req,res){
    let body = req.body;
    const response  = await menuItem.create({
        name: body.name,
        description: body.description,
        price: body.price,
        category: body.category,
        imageUrl: body.imageUrl, 
    })
    return res.json({"msg":"Success","Response ":response})
    
}

async function handleMenuItem(req,res){
    let id =  req.params.id;
    const item = await menuItem.findById(id); 
    res.json({"response":item});
}

async function handleUpdateMenuItem(req,res){
    console.log("upadte Menu Items");
    res.json("Updation is not developed");
}

async function handleDeleteMenuItem(req,res){
    console.log("delete Menu Items");
    res.json("Deletion is not developed");
}

async function handleAllMenuItemByCategory(req,res){
    const items = await menuItem.find({category:"dish"});
    res.json({"response":items});
}

module.exports = {
    handleAllMenu,
    handleCreateMenuItem,
    handleMenuItem,
    handleUpdateMenuItem,
    handleDeleteMenuItem,
    handleAllMenuItemByCategory
}