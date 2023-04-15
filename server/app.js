const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

//import env files
dotenv.config({path:"./config.env"});
require("./database/conn")
app.use(express.json()) 
app.use(bodyParser.json()) 
app.use(cookieParser());

const PORT = process.env.PORT;

`mongoose.set('strictQuery', true)`

//import router file ------- middlewares
 app.use(require("./router/auth"))


app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
