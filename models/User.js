const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
 
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    Block:{
      type: Number,
   default:0,
    },
    orderdetails:{
      type: Array,
      default:0,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
