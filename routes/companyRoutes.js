const express = require('express');
const router = express.Router();
const {
  getCompanies,
  setCompany,
  deleteCompany,
  updateCompany,
} = require('../controllers/companyController');

function Protected(req, res, next) {
  res.set("WWW-Authenticate", "Basic realm='Our MERN App'")
  if (req.headers.authorization == "Basic YWRtaW46YWRtaW4=") {
    next()
  } else {
    console.log(req.headers.authorization)
    res.status(401).send("Try again")
  }
}

router.route('/').get(getCompanies).post(setCompany);
router.route('/:id').delete(deleteCompany).put(updateCompany)
module.exports = router;
