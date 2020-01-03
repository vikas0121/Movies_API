// models/actor.js
var mongoose = require('mongoose');
//var generateId = require('./plugins/generateId');

var actorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birth_year: {
        type: Number,
        required: true

    },
    movies: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Movie'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// actorSchema.plugin(generateId());
module.exports = mongoose.model('Actor', actorSchema);