// orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('./orderControllers');


router.post('/save-order', orderController.saveOrder);
router.get('/orders', orderController.getAllOrders);

module.exports = router;
