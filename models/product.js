const { Schema, model } = require('mongoose');
const { handleErrors } = require('../helpers');

const productSchema = Schema({
  productType: {
    type: String,
    enum: ['watches', 'accessories'],
    required: [true, 'Set productType - its required!'],
  },
  series: {
    type: String,
    enum: ['ebony', 'maple'],
    required: [true, 'Set series - its required!'],
  },
  name: {
    type: String,
    required: [true, 'Set name - its required!'],
  },
  price: {
    type: Number,
    min: 1,
    required: [true, 'Set name - its required!'],
  },
  discount: {
    type: Number,
    default: 0
  },
  img: {
    type: String,
    default: " "
  },
  material: {
    type: String,
    default: ""
  },
  case: {
    type: String,
    default: ""
  },
  movement: {
    type: String,
    default: ""
  },
  dial: {
    type: String,
    default: ""
  },
  hand: {
    type: String,
    default: ""
  },
  important: {
    type: String,
    default: ""
  },
  new: {
    type: Boolean,
    default: false
  }
}, { versionKey: false, timestamps: true });

productSchema.post("save", handleErrors);
const Product = model('product', productSchema);

module.exports = Product;