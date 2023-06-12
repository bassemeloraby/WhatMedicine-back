const Company = require('../models/copmanyModel');
const asyncHandler = require('express-async-handler');

// @desc    Get companies
// @route   GET /api/companies
// @access  public
const getCompanies = async (req, res) => {
  const companies = await Company.find();
  res.status(200).json(companies);
};

// @desc    Set company
// @route   POST /api/companies
// @access  public
const setCompany = async (req, res) => {
  try {
    if (!req.body.companyName) {
      res.status(400).json({ message: 'Please add a Company Name field' });
    }
    const company = await Company.create({
      companyName: req.body.companyName,
      website:req.body.website
    })
    // .createIndex({ companyName: 1 }, { unique: true });
    res.status(200).json(company);
  } catch (error) {
    res.status(400);
  }
};

// @desc    Delete company
// @route   DELETE /api/companies/:id
// @access  public
const deleteCompany = asyncHandler(async (req, res) => {
  // const company = await Company.findById(req.params.id)
  const company = await Company.findByIdAndRemove(req.params.id);

  if (!company) {
    res.status(400).json({ message: 'company not found' });
  }

  res.status(200).json({ id: req.params.id });
});

// @desc    Update company
// @route   PUT /api/companies/:id
// @access  public
const updateCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) {
    res.status(400).json({ message: 'Company not found' });
  }

  const updatedCompany = await Company.findByIdAndUpdate(
    req.params.id,
    req.body.companyName,
    req.body.website,
    {
      new: true,
    }
  );
  res.status(200).json(updatedCompany);
});

module.exports = {
  getCompanies,
  setCompany,
  deleteCompany,
  updateCompany,
};
