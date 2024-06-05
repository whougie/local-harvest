const router = require('express').Router();

const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../../controllers/productController.js');

// /api/products
router.route('/').get(getProducts).post(createProduct);

// /api/products/:productId
router
  .route('/:productId')
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;