const express = require('express');
const router = express.Router();

const WristwatchController = require('./../controllers/tourController');

//เรียกใช้ api ที่สร้างขึ้นมา
router
.route('/')
.get(WristwatchController.getAllTours)
.post(WristwatchController.createNewTour);

router
.route('/:id')
.get(WristwatchController.getOneTours)
.put(WristwatchController.updateTour)
.delete(WristwatchController.deleteTour);

module.exports = router;
