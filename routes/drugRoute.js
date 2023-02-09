const express = require('express');
const router = express.Router();
const {
 getDrugs,
 getOneDrug,

 
} = require('../controllers/drugController');

router.route('/').get(getDrugs)
router.route('/:_id').get(getOneDrug)




module.exports = router;