const express = require('express');
const router = express.Router();
const { getDrugs, getOneDrug,
    // setDrug 
} = require('../controllers/drugController');

router.route('/').get(getDrugs)
// .post(setDrug)
;
router.route('/:_id').get(getOneDrug);

module.exports = router;
