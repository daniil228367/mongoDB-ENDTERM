// orderController.js

const Order = require('../models/orderModel'); 

const saveOrder = async (req, res) => {
    try {
       
        const { laptopId, customerName, email, quantity, price, orderDate } = req.body;
        
       
        const newOrder = new Order({
            customerName,
            customerEmail: email,
            laptop: laptopId,
            quantity,
            totalPrice: price * quantity, 
            orderDate
        });

        
        await newOrder.save();

        res.status(200).json({ success: true, message: 'Order saved successfully' });
    } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).json({ success: false, message: 'Failed to save order' });
    }
};

const getAllOrders = async (req, res) => {
  try {
     
      const orders = await Order.find();

      
      res.status(200).json(orders);
  } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
};

module.exports = {
  saveOrder,
  getAllOrders
};