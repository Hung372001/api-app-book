const mongoose = require('mongoose');

const DoTuoiSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
  

});

module.exports = mongoose.model('DoTuoi', DoTuoiSchema);