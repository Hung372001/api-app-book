const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.post("/register", async (req, res) => {
  try {
  

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
    });

    const user = await newUser.save();
    console.log(user)
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(400).json("User not found ");
    }

    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }

    const { password, ...others } = user._doc;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
