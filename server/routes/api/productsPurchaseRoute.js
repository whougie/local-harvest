const router = require('express').Router();

const {
  getProductsPurchases, 
  getSingleProductsPurchase,
  createProductsPurchase,
  updateProductsPurchase,
  deleteProductsPurchase
} = require('../../controllers/productsPurchaseController.js');

// /api/products-purchases
router.route('/').get(getProductsPurchases).post(createProductsPurchase);

// /api/products-purchases/:productPurchaseId
router
  .route('/:productsPurchaseId')
  .get(getSingleProductsPurchase)
  .put(updateProductsPurchase)
  .delete(deleteProductsPurchase);

module.exports = router;