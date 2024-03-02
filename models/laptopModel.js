const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  cpu: {
    type: String,
    required: true
  },
  gpu: {
    type: String,
    required: true
  },
  ram: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  photo: {
    type: String,
    required: true
  }
});

const Laptop = mongoose.model('Laptop', laptopSchema);

module.exports = Laptop;
