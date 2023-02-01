const Drug = require('../models/drugModel');

const getDrugs = async (req, res) => {
  const drugs = await Drug.find({}, {TradeName:1,ScientificName:1}).sort( { "TradeName": 1 });
  res.status(200).json(drugs);
  // res.status(200).json([{_id,TradeName,ScientificName}]);
};

const getOneDrug = async (req, res) => {
  // const drugs = await Drug.findById(req.params.id);
  const drugs = await Drug.find({ _id: req.params._id });
  if (!drugs) {
    res.status(400).json({ message: 'not found' });
  }
  // res.status(200).json({ id: req.params.id });
  res.status(200).json(drugs);
};

module.exports = {
  getDrugs,
  getOneDrug,
};
