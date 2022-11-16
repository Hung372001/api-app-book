const express = require("express");
const router = express.Router();
const Bia = require("../models/Bia");


router.get("/",(req,res)=>{
    try{
const bia=  Bia.find();
res.status(200).json(bia);

    }catch(err){
        res.status(500).json(err);
    }
})
router.get("/:id", async(req,res)=>{
    try{
        const bia = await Bia.findById(req.params.id);
        
        res.status(200).json(bia);
      }catch(err){
        res.status(500).json(err);
      }
})

router.post("/", async(req,res)=>{
    try{
     const bia = new TheLoai({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name
     })
        
        res.status(200).json(bia);
      }catch(err){
        res.status(500).json(err);
      }
})

router.put("/:id",async (req,res)=>{
    try {
      const upadtebia = await Bia.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(upadtebia);
      console.log(upadtebia)
    } catch (err) {
      res.status(500).json(err);
    }
  })