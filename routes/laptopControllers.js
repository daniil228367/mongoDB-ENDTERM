// laptopControllers.js

const Laptop = require('../models/laptopModel');

const createLaptop = async (req, res) => {
  try {
      
      const { name, brand, cpu, gpu, ram, price, photo } = req.body;
      
     
      const newLaptop = new Laptop({
          name,
          brand,
          cpu,
          gpu,
          ram,
          price,
          photo
      });
      
     
      const savedLaptop = await newLaptop.save();
      
      
      res.status(201).json(savedLaptop);
  } catch (error) {
      
      res.status(500).json({ message: error.message });
  }
};

const getLaptopById = async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id);
    if (!laptop) {
      return res.status(404).json({ message: 'Laptop not found' });
    }
    res.status(200).json(laptop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllLaptops = async (req, res) => {
  try {
      const laptops = await Laptop.find();
      res.status(200).json(laptops);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const deleteLaptopById = async (req, res) => {
  try {
      const laptop = await Laptop.findByIdAndDelete(req.params.id);
      if (!laptop) {
          return res.status(404).json({ message: 'Laptop not found' });
      }
      res.status(200).json({ message: 'Laptop deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const updateLaptopById = async (req, res) => {
  try {
    const updatedLaptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLaptop) {
      return res.status(404).json({ message: 'Laptop not found' });
    }
    res.status(200).json(updatedLaptop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLaptop,
  getLaptopById,
  getAllLaptops,
  deleteLaptopById,
  updateLaptopById
};