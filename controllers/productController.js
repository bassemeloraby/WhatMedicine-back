const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// @desc    Get products
// @route   GET /api/products
// @access  public
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

// @desc    Set company
// @route   POST /api/companies
// @access  public
const setProduct = asyncHandler(async (req, res) => {
  const products = await Product.create({
    company: req.body.company,
    productName: req.body.productName,
    photo: req.body.photo,
    category: req.body.category,
    age: req.body.age,
  });
  res.status(200).json(products);
  console.log(products);
});

// @desc    Delete company
// @route   DELETE /api/companies/:id
// @access  public
const deleteProduct = asyncHandler(async (req, res) => {
  // const company = await Company.findById(req.params.id)
  const product = await Product.findByIdAndRemove(req.params.id);

  if (!product) {
    res.status(400).json({ message: "product not found" });
  }

  res.status(200).json({ id: req.params.id });
});

// @desc    Update company
// @route   PUT /api/companies/:id
// @access  public
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400).json({ message: "product not found" });
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
});

module.exports = {
  getProducts,
  setProduct,
  deleteProduct,
  updateProduct,
};
