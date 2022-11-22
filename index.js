
const express = require("express");
const app = express();
const dotenv = require("dotenv");

const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const donHangRoute = require("./routes/donHang");
const join =require("./routes/Join")
const book = require("./routes/Post")
const cors = require("cors");
const { Router } = require("express");
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

app.use(express.static("./public"));
app.use(cors({

}))
app.use("/api/join",join)
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/donhang",donHangRoute);
app.use("/api/book", book);
app.use(express.static("./upload/images"));
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
