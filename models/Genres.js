const mongoose = require('mongoose');

const GenresSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
  

});

module.exports = mongoose.model('Genres', GenresSchema);