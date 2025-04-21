const mongoose = require("mongoose")
const menuItem = require("../models/menuItem")

async function handleAllMenu(req,res){
    try {
        let items = await menuItem.find({});
        const categories = await menuItem.distinct('category'); 
        res.status(200).json({"response":items,"categories":categories});
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
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