const mongoose = require("mongoose");

const DonHangSchema = new mongoose.Schema({
    nameDonHang: {
        type: String,
        required: true,
        unique: true,
    },
    ngayMua: {
        type: Date,
        default: "",
    },
    TongTien: {
        type: Number,
        required: true,
        unique: true,
    },
    nguoiNhan:{
        type: String,
        require: true,
    },
    DiaChiNhanHang:{
        type: String,
        require: true,
    },
    SoDienThoai:{
        type: Number,
        required: true,
    },
    nguoiMua: {
        type: String,
        require: true,
    },trangThai:{
        type:String,
        require:true,
    },tenSp:{
        type: String,
        required: true,
    },SoLuong:{
        type: Number,
        required: true,
    },PhuongThucVanChuyen:{
        type: String,
        required: true,
    },PhuongThucThanhToan:{
        type: String,
        required: true,
    }
}, {
    timestamps: true
});
const UserCollection = mongoose.model('User',)
module.exports = UserCollection;