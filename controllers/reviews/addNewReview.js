const Review = require('../../models/review');

const addNewReview = async (req, res) => {
  const result = await Review.create(req.body);
  res.status(201).json({
    data: result
  });
}

module.exports = addNewReview;