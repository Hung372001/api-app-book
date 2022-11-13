const router = require("express").Router();
const DonHang = require("../models/DonHang");

router.post("/datHang", async (req, res) => {
    try {
  
      const newDonHang = new DonHang({     
        nameDonHang: req.body.nameDonHang,
        ngayMua : req.body.ngayMua,
        TongTien: req.body.TongTien,
        nguoiMua: req.body.nguoiMua,
        trangThai: req.body.trangThai,
        nguoiNhan:req.body.nguoiNhan,
        DiaChiNhanHang:req.body.DiaChiNhanHang,
        SoDienThoai:req.body.SoDienThoai,
        tenSp:req.body.tenSp,
        SoLuong:req.body.SoLuong,
        PhuongThucVanChuyen:req.body.PhuongThucVanChuyen,
        PhuongThucThanhToan:req.body.PhuongThucThanhToan,

      });
  
      const donHang = await newDonHang.save();
      res.status(200).json(donHang);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;