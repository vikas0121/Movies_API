const express = require('express');
const {
  getAll,
  addMovie
} = require('../controllers/movies');

const router = express.Router();

router
  .route('/')
  .get(getAll)
  .post(addMovie);

module.exports = router;