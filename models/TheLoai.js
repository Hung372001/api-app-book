const mongoose = require('mongoose');

const TheLoaiSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
  

});

module.exports = mongoose.model('TheLoai', TheLoaiSchema);