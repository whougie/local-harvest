const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  userLogin,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);
router.route('/login').post(userLogin);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);
  

// /api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId')
// .post(addFriendToUser)
// .delete(deleteFriendToUser);

module.exports = router;