const Joi = require('joi');

const productSchema = Joi.object({
  productType: Joi.string().valid('watches', 'accessories').required(),
  series: Joi.string().valid('ebony', 'maple').required(),
  name: Joi.string().required(),
  price: Joi.number().min(1).required(),
  discount: Joi.number().default(0),
  img: Joi.string().default(""),
  material: Joi.string().default(""),
  case: Joi.string().default(""),
  movement: Joi.string().default(""),
  dial: Joi.string().default(""),
  hand: Joi.string().default(""),
  important: Joi.string().default(""),
  new: Joi.bool().default(false),
});

module.exports = {
  productSchema
};
