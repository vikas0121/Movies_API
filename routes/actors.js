const express = require('express');
const {
  getAll,
  addActor
} = require('../controllers/actors');

const router = express.Router();

router
  .route('/')
  .get(getAll)
  .post(addActor);

module.exports = router;