const Movie = require('../models/Movie');

// @desc  Get all movies
// @route GET /api/v1/movies
// @access Public
exports.getAll = async (req, res, next) => {
  try {
    const movies = await Movie.find();

    return res.status(200).json({
      success: true,
      count: movies.length,
      data: movies
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server error'
    });
  }
};

// @desc  Create a movie
// @route POST /api/v1/movies
// @access Public
exports.addMovie = async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body);

    return res.status(200).json({
      success: true,
      data: movie
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({
        error: 'This movie already exists'
      });
    }
    res.status(500).json({
      error: 'Server error'
    });
  }
};