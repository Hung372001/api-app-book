const mongoose = require('mongoose');

const BiaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
  

});

module.exports = mongoose.model('Bia', BiaSchema);