const express = require('express');
const router = express.Router();
const adController = require('../controllers/adController');
// view ad
router.route('/')
    .get(adController.getAllAds)
    .post(adController.postAd);

router.route('/:id')
    .get(adController.getAd)
    .patch(adController.updateAd)
    .delete(adController.deleteAd);
// create ad

// delete ad

// update ad

module.exports = router;