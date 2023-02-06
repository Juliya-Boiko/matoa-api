const { Schema, model } = require('mongoose');
const { handleErrors } = require('../helpers');

const reviewSchema = Schema({
  author: {
    type: String,
    required: [true, 'Set author - its required!'],
  },
  photo: {
    type: String,
    default: " "
  },
  review: {
    type: String,
    required: [true, 'Set review - its required!'],
  },
}, { versionKey: false, timestamps: true });

reviewSchema.post("save", handleErrors);
const Review = model('review', reviewSchema);

module.exports = Review;