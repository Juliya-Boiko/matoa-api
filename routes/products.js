const express = require('express');
const productsRouter = express.Router();
const { controllerWrapper } = require('../helpers');
const { validation } = require('../middlewares');
const { productSchema } = require('../schemas/product');
const { getAllProducts, addNewProduct } = require('../controllers/products');

productsRouter.get('/', controllerWrapper(getAllProducts));

productsRouter.post('/', validation(productSchema), controllerWrapper(addNewProduct));

module.exports = productsRouter;