const express = require('express');
const authRouter = express.Router();
// const { controllerWrapper } = require('../helpers');
// const { validation } = require('../middlewares');
// const { loginSchema, registerSchema } = require('../schemas/auth');
// const { getAllNews, addNewNews } = require('../controllers/news');

// authRouter.post('/register', validation(userSchema), controllerWrapper(getAllNews));

// authRouter.post('/login', validation(userSchema), controllerWrapper(addNewNews));

module.exports = authRouter;