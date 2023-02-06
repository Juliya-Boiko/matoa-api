const express = require('express');
const newsRouter = express.Router();
const { controllerWrapper } = require('../helpers');
const { validation } = require('../middlewares');
const { newsSchema } = require('../schemas/news');
const { getAllNews, addNewNews } = require('../controllers/news');

newsRouter.get('/', controllerWrapper(getAllNews));

newsRouter.post('/', validation(newsSchema), controllerWrapper(addNewNews));

module.exports = newsRouter;