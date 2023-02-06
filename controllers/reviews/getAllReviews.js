const Review = require('../../models/review');

const getAllReviews = async (req, res) => { 
  const result = await Review.find({});
  res.json({
    data: result,
  });
};

module.exports = getAllReviews;