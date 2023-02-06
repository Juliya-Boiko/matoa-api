const Product = require('../../models/product');

const addNewProduct = async (req, res) => {
  const result = await Product.create(req.body);
  res.status(201).json({
    data: result
  });
}


module.exports = addNewProduct;