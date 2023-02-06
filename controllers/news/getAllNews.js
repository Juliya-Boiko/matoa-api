const News = require('../../models/news');

const getAllNews = async (req, res) => {
  const result = await News.find({});
  res.json({
    data: result,
  });
};

module.exports = getAllNews;