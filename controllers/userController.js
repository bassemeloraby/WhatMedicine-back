const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// @desc    Get users
// @route   GET /api/users
// @access  public
const getusers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// @desc    Get one user
// @route   GET /api/users
// @access  public
const getOneUser = asyncHandler(async (req, res) => {
  const users = await User.findOne({ userName: req.body.userName });
  res.status(200).json({ role: users.role });
});

// @desc    Set user
// @route   POST /api/users
// @access  public
const setUser = asyncHandler(async (req, res) => {
  const { userName, password, role } = req.body;

  if (!userName || !password || !role) {
    res.status(400).json({ message: 'Please add all fields' });
  }

  const user = await User.create({
    userName,
    password,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      userName: user.userName,
      password: user.password,
      role: user.role,
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  public
const deleteUser = asyncHandler(async (req, res) => {
  // const company = await Company.findById(req.params.id)
  const user = await User.findByIdAndRemove(req.params.id);

  if (!user) {
    res.status(400).json({ message: 'user not found' });
  }

  res.status(200).json({ id: req.params.id });
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  public
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400).json({ message: 'user not found' });
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

module.exports = {
  getusers,
  getOneUser,
  setUser,
  deleteUser,
  updateUser,
};
