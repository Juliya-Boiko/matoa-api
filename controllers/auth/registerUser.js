const bcryrpt = require('bcrypt');
const User = require('../../models/user');
const { Conflict } = require('http-errors');

const registerUser = async (req, res) => {
  const { password, email, name } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  };
  const hashPass = bcryrpt.hashSync(password, bcryrpt.genSaltSync(10));
  const result = await User.create({ email, password: hashPass, name });
  res.status(201).json({
    data: {
      email: result.email,
      name: result.name
    }
  });
};

module.exports = registerUser;