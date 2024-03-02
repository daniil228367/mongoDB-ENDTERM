const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  laptop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Laptop',
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  reviewDate: {
    type: Date,
    default: Date.now
  },
  photo_1: {
    type: String,
    required: true
  },
  photo_2: {
    type: String,
    required: true
  },
  photo_3: {
    type: String,
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
