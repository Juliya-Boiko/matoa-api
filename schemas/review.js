const Joi = require('joi');

const reviewSchema = Joi.object({
  author: Joi.string().required(),
  photo: Joi.string().default(""),
  review: Joi.string().required(),
});

module.exports = {
  reviewSchema
};