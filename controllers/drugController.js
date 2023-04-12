const Drug = require('../models/drugModel');
const asyncHandler = require('express-async-handler');

const getDrugs = asyncHandler(async (req, res) => {
  const drugs = await Drug.find(
    {},
    { TradeName: 1, ScientificName: 1, PublicPrice: 1 }
  ).sort({ TradeName: 1 });
  res.status(200).json(drugs);
});

const getOneDrug = asyncHandler(async (req, res) => {
  const drugs = await Drug.find({ _id: req.params._id });
  if (!drugs) {
    res.status(400).json({ message: 'not found' });
  }
  res.status(200).json(drugs);
});



module.exports = {
  getDrugs,
  getOneDrug,
};
