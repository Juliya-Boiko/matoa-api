const { Schema, model } = require('mongoose');
const { handleErrors } = require('../helpers');

const newsSchema = Schema({
  title: {
    type: String,
    required: [true, 'Set title - its required!'],
  },
  photo: {
    type: String,
    default: " "
  },
  text: {
    type: String,
    required: [true, 'Set trxt - its required!'],
  }
}, { versionKey: false, timestamps: true });

newsSchema.post("save", handleErrors);
const News = model('news', newsSchema);

module.exports = News;