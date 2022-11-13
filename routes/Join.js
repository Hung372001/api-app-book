const router = require("express").Router();
var MongoClient = require('mongodb').MongoClient;

const User = require("../models/User");
const DonHang = require("../models/DonHang");
const { default: mongoose } = require("mongoose");
const UserCollection = require("../models/User");


router.get("/", async (req, res,next) => {
  UserCollection.aggregate([
  
    {
      $lookup: {
        from: 'donhangs', // secondary db

        as: 'donhangs',
        let:{nguoiMua :"$username"},
        pipeline:[
          {
            $match:{
              $expr:{
                $eq:[
                  '$nguoiMua',"$$nguoiMua"
                ]
              }
            }
          }
        ] // output to be stored
      }
    },{
      $project:{
        _id:1,
        username:1,
        donhangs:1
      }
    }
  ]).exec((err,result)=>{
    if(err){
      console.log(err);
    }
    if(result){
res.send({
  data:result
})
    }
  });
 

  });

 
  module.exports = router;
