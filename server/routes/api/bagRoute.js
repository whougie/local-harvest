const router = require('express').Router();

const {
  getBags,
  getSingleBag,
  createBag,
  updateBag,
  deleteBag
} = require('../../controllers/bagController.js');

// /api/bags
router.route('/').get(getBags).post(createBag);

// /api/bags/:bagId
router
  .route('/:bagId')
  .get(getSingleBag)
  .put(updateBag)
  .delete(deleteBag);

module.exports = router;