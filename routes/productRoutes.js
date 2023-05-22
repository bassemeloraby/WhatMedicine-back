const express = require('express');
const router = express.Router();
const {
  getProducts,
  setProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productController');

router.route('/').get(getProducts).post(setProduct);
router.route('/:id').delete(deleteProduct).patch(updateProduct);
module.exports = router;
