const Drug = require('../models/drugModel');
const asyncHandler = require('express-async-handler');

// @desc    Get drugs
// @route   GET /api/drugs
// @access  public
const getDrugs = asyncHandler(async (req, res) => {
  const drugs = await Drug.find(
    {},
    { TradeName: 1, ScientificName: 1, PublicPrice: 1 }
  ).sort({ TradeName: 1 });
  res.status(200).json(drugs);
});

// @desc    Get one drug
// @route   GET /api/drugs/:id
// @access  public
const getOneDrug = asyncHandler(async (req, res) => {
  const drugs = await Drug.find({ _id: req.params._id });
  if (!drugs) {
    res.status(400).json({ message: 'not found' });
  }
  res.status(200).json(drugs);
});

// @desc    Set drug
// @route   POST /api/drugs
// @access  public
const setDrug = async (req, res) => {
  try {
    if (!req.body.TradeName) {
      res.status(400).json({ message: 'Please add a drug Trade Name field' });
    }
    const drug = await Drug.create({
      TradeName: req.body.TradeName,
    })
 res.status(200).json(drug);
  } catch (error) {
    res.status(400);
  }
};

module.exports = {
  getDrugs,
  getOneDrug,
  setDrug
};
