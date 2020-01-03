const mongoose = require('mongoose');
//const generateId = require('./plugins/generateId');
//const geocoder = require('../utils/geocoder');


// models/movies.js
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number,
    required: true
  },
  actors: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Actor'
  }],
  // address: {
  //   type: String,
  //   required: [true, 'Please add an address']
  // },
  // location: [{
  //   type: {
  //     type: String,
  //     enum: ['Point']
  //   },
  //   coordinates: {
  //     type: [Number],
  //     index: '2dsphere'
  //   },
  //   formattedAddress: String
  // }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});


// Geocode & create location
// movieSchema.pre('save', async function (next) {
//   const loc = await geocoder.geocode(this.address);
//   this.location = {
//     type: 'Point',
//     coordinates: [loc[0].longitude, loc[0].latitude],
//     formattedAddress: loc[0].formattedAddress
//   };

//   // Do not save address
//   this.address = undefined;
//   next();
// });

//movieSchema.plugin(generateId());
module.exports = mongoose.model('Movie', movieSchema);