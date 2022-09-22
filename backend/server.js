const app = require('./app');
const express = require('express');
const dotenv =require('dotenv');
const connectDatabase = require('./config/database')
const cloudinary = require("cloudinary");
const path = require('path');
dotenv.config({path:'backend/config/config.env'})


connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  __dirname=path.resolve()
  app.use(express.static(path.join(__dirname,"/frontend/build")))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
  })

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on ${process.env.PORT}`)
})

