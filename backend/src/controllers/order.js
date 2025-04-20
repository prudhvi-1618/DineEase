const { orderCreateService,
    orderItemCreateService, 
    orderGetServiceById, 
    orderAllGetService, 
    orderGetServiceByPhoneNumber } 
    = require("../models/order")


async function handleCreateOrder(req,res){
    const { customer_name, phone_number, cart } = req.body;
    if (!customer_name || !phone_number || !cart || cart.length === 0) {
      return res.status(400).json({ error: "Missing customer info or cart" });
    }
    try{
        const orderId = await orderCreateService(customer_name,phone_number);
        for(let item of cart){
            await orderItemCreateService(orderId,item);
        }
        res.status(201).json({ message: "Order placed successfully", order_id: orderId });
    } catch (err) {
        console.error("Order placement failed:", err);
        res.status(500).json({ error: "Internal server error" });
    };
};

async function handleGetAllOrder(req,res){
    try{
        const orders = await orderAllGetService();
        res.status(200).json({orders: orders });
    }catch(err){
        console.error("Fetching Orders failed:", err);
        res.status(500).json({ error: "Internal server error" });
    }

}

async function handleGetOrderById(req,res){
    try{
        const order = await orderGetServiceById(req.params.id);
        res.status(200).json({order: order });
    }catch(err){
        console.error("Fetching Order By id  failed:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

async function handleGetOrderByPhone_num(req,res){
    try{
        const orders = await orderGetServiceByPhoneNumber(req.params.phone_number);

        let order_list = [];
        for(let order of orders){
            const items = await orderGetServiceById(order.order_id); 
            order_list.push(items);
        }
        res.status(200).json({order: order_list });
    }catch(err){
        console.error("Fetching Order By id  failed:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    handleCreateOrder,
    handleGetAllOrder,
    handleGetOrderById,
    handleGetOrderByPhone_num
}