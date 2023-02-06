const User = require('../../models/user');
const bcryrpt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;
const { Unauthorized } = require('http-errors');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized("Email is wrong");
  };
  const passCompare = bcryrpt.compareSync(password, user.password);
  if (!passCompare) {
    throw new Unauthorized("Password is wrong");
  };
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "3h" });
  await User.findByIdAndUpdate(user._id, { token });
  
  res.status(200).json({
    token,
    user: {
      email: user.email,
      name: user.name
    }
  });
};

module.exports = loginUser;