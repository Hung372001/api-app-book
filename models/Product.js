const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  namefile: { type: String, required: true },
  file: { type: String, required: true },
  desc: {
    type: String,
    default: "",
  },
  Subject: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("Product", productSchema);
