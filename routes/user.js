const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const PAGE_SIZE =12;
//Update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});


//Delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});
//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  let page = req.query.page;
  try {
    if(page){
      page =parseInt(page);
      let skipItem= (page-1)*PAGE_SIZE;
      User.find({}).skip(skipItem).limit(PAGE_SIZE).then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        res.status(500).json(err);
      })
    }else{

      const user = await User.find();

      res.status(200).json(user);
    }

   
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
