const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    nameBook: {
      type: String,
      required: true,
      unique: true,
    },
    nhaCungCap: {
      type: String,
      default: "",
    },
    nhaXuatBan: {
        type: String,
        default: "",
      },
    tacGia: {
        type: String,
        default: "",
    },
  
    bia: {
        type: String,
        default: "",
    },
    theLoai:{
        type: String,
        default: "",
    },
    loaiSach:{
        type: String,
        default: "",
    },
    theLoaiChinh:{
        type: String,
        default: "",
    },gia:{
        type: Number,
        default: 0,
    },
    img:
    {
        type: String,
        required: true,   
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
