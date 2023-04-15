const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const db = process.env.MONGO_URL; 
// const db = process.env.MONGO_COMPASS; 

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connection successful`);
  }).catch((error) => {
    console.log(`connection failed`);
  });