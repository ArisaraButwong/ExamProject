const dotenv = require('dotenv');
const tourModel = require("../models/tourModel");

exports.getAllTours = async function (req, res) {
  try {
    const Tour = await tourModel.find({});
    res.status(200).json({
      status: "success",
      results: Tour.length,
      data: {Tour},
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneTours = async function (req, res) {
  try {
    const TourId = parseInt(req.params.id);
    const Tour = await tourModel.findOne({id: TourId});
    if (Tour) {
        res.status(200).json({
            status:'success',
            data: {Tour}
        });
    } else {
        res.status(404).json({
            status:'fail',
            message: 'NO ID FOUND'
        });
    }
} catch (error) {
res.status(404).json({
    status: 'fail',
    message: error
})};
};

exports.createNewTour = async function (req, res) {
  try {
    const { id, name, duration, maxGroupSize, difficulty, ratingAverage, price, summary, startDates  } = req.body;

    const newTour = new TourModel({ id, name,duration, maxGroupSize, difficulty, ratingAverage, price, summary, startDates });
    const Tour = await TourModel.create(newTour);
    res.status(200).json({
      status: "success",
      results: Tour.length,
      data: { Tour },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateTour = async function (req, res) {
  try {
    const id = req.params.id;
    const { name,duration, maxGroupSize, difficulty, ratingAverage, price, summary, startDates } = req.body;

    const Tour = await TourModel.findOneAndUpdate({ id }, { name,duration, maxGroupSize, difficulty, ratingAverage, price, summary, startDates });
    res.status(200).json({
      status: "success",
      results: Tour.length,
      data: { Tour },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteTour = async function (req, res) {
  try {
    const id = req.params.id;

    const Tour = await TourModel.findOneAndDelete({ id });
    res.status(200).json({
      status: "success",
      results: Tour.length,
      data: { Tour },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};