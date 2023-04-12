const express = require('express');
const router = express.Router();
const {
  getusers,
  getOneUser,
  setUser,
  deleteUser,
  updateUser,
} = require('../controllers/userController');

router.route('/').get(getusers).post(setUser);
router.route('/:id').delete(deleteUser).put(updateUser);
router.route('/user').get(getOneUser)
module.exports = router;
