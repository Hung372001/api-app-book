
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
const donHangRoute = require("./routes/donHang");
const join =require("./routes/Join")
const book = require("./routes/Book")
const { Router } = require("express");
const router = express.Router();
const upload = multer();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.listen(5000, () => {
  console.log(1234);
});

app.use("/",router)
app.use(express.static("./upload/images"));

app.use("/api/join",join)
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/donhang",donHangRoute);
app.use("/api/book", book);
