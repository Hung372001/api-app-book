const router = require("express").Router();

const multer = require('multer');
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");



const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 100,
  },
});

router.post("/",  upload.single("imageBook") ,  (req, res,next) => {
 
    const newBook = new Book({
      nameBook: req.body.nameBook,
      nhaCungCap: req.body.nhaCungCap,
      nhaXuatBan: req.body.nhaXuatBan,
      nguoiMua:req.body.nguoiMua,
      tacGia: req.body.tacGia,
      bia: req.body.bia,
      theLoai: req.body.theLoai,
      loaiSach: req.body.loaiSach,
      theLoaiChinh: req.body.theLoaiChinh,
      gia: req.body.gia,
      imageBook: req.file.path,
    });

    newBook.save().then((result)=>{
      res.status(200).json(bookApp);

    }).catch((err)=>{
      res.status(500).json(err);
    })
  
   
  
});

router.get("/", async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).json(data)
    console.log(data)

  } catch (err) {
    res.status(500).json(err);

  }
})
module.exports = router;
