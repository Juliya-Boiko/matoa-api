const express = require('express');
const reviewsRouter = express.Router();
const { controllerWrapper } = require('../helpers');
const { validation } = require('../middlewares');
const { reviewSchema } = require('../schemas/review');
const { getAllReviews, addNewReview } = require('../controllers/reviews');

reviewsRouter.get('/', controllerWrapper(getAllReviews));

reviewsRouter.post('/', validation(reviewSchema), controllerWrapper(addNewReview));

module.exports = reviewsRouter;