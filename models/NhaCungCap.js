const mongoose = require('mongoose');

const NhaCungCapSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
  

});

module.exports = mongoose.model('NhaCungCap', NhaCungCapSchema);