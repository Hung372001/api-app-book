const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const PAGE_SIZE =12;
const storage = multer.diskStorage({
  destination: "./public/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (["image/jpg","image/jpeg"].includes( file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage:storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


const Book = require("../models/Book");
const User = require("../models/User");
router.delete("/",(req,res)=>{
  fs.unlink("./upload/images/img_1668535921030.jpg",(err)=>{
console.log(err)
  })
  res.json("xoa thanh cong")
})
router.post("/",upload.single('img'),function (req, res){
  
 try{
  console.log(req.file);
  const skipCharactersCount = path.join(__dirname,'..','public').length;
  const newBook = new Book({     
    nameBook: req.body.nameBook,
    nhaCungCap : req.body.nhaCungCap,
    nhaXuatBan: req.body.nhaXuatBan,
    tacGia: req.body.tacGia,
    bia: req.body.bia,
    theLoai:req.body.theLoai,
    loaiSach:req.body.loaiSach,
    theLoaiChinh:req.body.theLoaiChinh,
    gia:req.body.gia,
    img:req.file.path.replace(/\\/g, "/").slice(6),
  });

  const book = newBook.save();
  res.status(200).json(book)
 }catch(err){
  console.log(err)
  res.status(500).json(err)
 }
})
router.get("/",async (req,res)=>{
  let page = req.query.page;
  try{
    if(page){
      page =parseInt(page);
      let skipItem= (page-1)*PAGE_SIZE;
      Book.find({}).skip(skipItem).limit(PAGE_SIZE).then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        res.status(500).json(err);
      })
    }else{
      const book = await Book.find();
      res.status(200).json(book);
    }

} catch (err) {
  res.status(500).json(err);
}
});
router.get("/:id",async (req,res)=>{

  try{
  
      const book = await Book.findById(req.params.id);
    
      res.status(200).json(book);
    
 
  }catch(err){
    res.status(500).json(err);
  }
})
router.put("/:id",async (req,res)=>{
  try {
    const upadteBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(upadteBook);
    console.log(upadteBook)
  } catch (err) {
    res.status(500).json(err);
  }
})
module.exports = router;
