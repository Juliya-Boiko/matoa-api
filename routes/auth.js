const express = require('express');
const authRouter = express.Router();
const { controllerWrapper } = require('../helpers');
const { validation } = require('../middlewares');
const { loginSchema, registerSchema } = require('../schemas/auth');
const { registerUser, loginUser, logoutUser } = require('../controllers/auth');

authRouter.post('/register', validation(registerSchema), controllerWrapper(registerUser));

authRouter.post('/login', validation(loginSchema), controllerWrapper(loginUser));

authRouter.post('/logout', controllerWrapper(logoutUser));

module.exports = authRouter;