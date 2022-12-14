const express = require("express");
const router = express.Router();

const TheLoai = require("../models/TheLoai");

router.get("/",(req,res)=>{
    try{
const theLoai=  TheLoai.find();
res.status(200).json(theLoai);

    }catch(err){
        res.status(500).json(err);
    }
})
router.get("/:id", async(req,res)=>{
    try{
        const theLoai = await TheLoai.findById(req.params.id);
        
        res.status(200).json(theLoai);
      }catch(err){
        res.status(500).json(err);
      }
})

router.post("/", async(req,res)=>{
    try{
     const theLoai = new TheLoai({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name
     })
        
        res.status(200).json(theLoai);
      }catch(err){
        res.status(500).json(err);
      }
})

router.put("/:id",async (req,res)=>{
    try {
      const upadteTheLoai = await TheLoai.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(upadteTheLoai);
      console.log(upadteTheLoai)
    } catch (err) {
      res.status(500).json(err);
    }
  })