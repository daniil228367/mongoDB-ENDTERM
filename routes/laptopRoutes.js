// laptopRoutes.js

const express = require('express');
const router = express.Router();
const laptopController = require('./laptopControllers'); 


router.post('/laptops', laptopController.createLaptop); 
router.get('/laptops/:id', laptopController.getLaptopById);
router.get('/laptops', laptopController.getAllLaptops);
router.delete('/laptops/:id', laptopController.deleteLaptopById);
router.put('/laptops/:id', laptopController.updateLaptopById);


module.exports = router;
