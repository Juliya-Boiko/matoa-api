const Joi = require('joi');

const newsSchema = Joi.object({
  title: Joi.string().required(),
  photo: Joi.string().default(""),
  text: Joi.string().required(),
});

module.exports = {
  newsSchema
};