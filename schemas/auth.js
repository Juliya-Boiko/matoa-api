const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(10).required()
});

const registerSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string()
});

module.exports = {
  loginSchema,
  registerSchema
};