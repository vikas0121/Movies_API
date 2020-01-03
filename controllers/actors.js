const Actor = require('../models/Actor');

// @desc  Get all actors
// @route GET /api/v1/actors
// @access Public
exports.getAll = async (req, res, next) => {
  try {
    const actors = await Actor.find();

    return res.status(200).json({
      success: true,
      count: actors.length,
      data: actors
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server error'
    });
  }
};

// @desc  Create a actor
// @route POST /api/v1/actors
// @access Public
exports.addActor = async (req, res, next) => {
  try {
    const actor = await Actor.create(req.body);

    return res.status(200).json({
      success: true,
      data: actor
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({
        error: 'This actor already exists'
      });
    }
    res.status(500).json({
      error: 'Server error'
    });
  }
};