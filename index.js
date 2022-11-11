
const express = require("express");
const app = express();
const dotenv = require("dotenv");
// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");


const mongoose = require("mongoose");
const multer = require("multer");

const path = require("path");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const { Router } = require("express");
const router = express.Router()
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.listen(4000, () => {
  console.log(1234);
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);