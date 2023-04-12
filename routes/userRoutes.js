const express = require('express');
const router = express.Router();
const {
  getusers,
  setUser,
  deleteUser,
  updateUser,
} = require('../controllers/userController');

router.route('/').get(getusers).post(setUser);
router.route('/:id').delete(deleteUser).put(updateUser);
module.exports = router;
