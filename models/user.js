const { Schema, model } = require('mongoose');

const userSchema = Schema({
  name: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
});

const User = model('user', userSchema);

module.exports = User;