const News = require('../../models/news');

const addNewNews = async (req, res) => {
  const result = await News.create(req.body);
  res.status(201).json({
    data: result
  });
};

module.exports = addNewNews;