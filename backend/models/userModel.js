const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    phone: {
      type: Number,
      maxLength: [15, "Phone cannot exceed 15 characters"],
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
      minLength: [8, "Password should be greater than 8 characters"],
      select: false,
    },
    image: {
        type: String,
    },
     
    role: {
      type: String,
      default: "client",
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
  });
  // Password Encryption
  userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
      next();
    }
    this.password = await bcrypt.hash(this.password,10);
  })


  // JWT Token
  userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
      expiresIn : process.env.JWT_EXPIRE,
    })
  }
  // Compare Password
  userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
  }
  //Generating Password reset token
  userSchema.methods.getResetPasswordToken = function(){
    //Generating Token
    const resetToken = crypto.randomBytes(20).toString('hex');
    //Hashing and adding resetPasswordtoken to userSchema
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    
    this.resetPasswordExpire = Date.now()+15*60*1000;
    return resetToken;

  }


  module.exports = mongoose.model("user", userSchema);

  