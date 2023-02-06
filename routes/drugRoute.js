const express = require('express');
const router = express.Router();
const {
 getDrugs,
 getOneDrug,
 getScientificName
} = require('../controllers/drugController');

router.route('/').get(getDrugs)
router.route('/:_id').get(getOneDrug)
router.route('/ScientificName').get(getScientificName)



module.exports = router;