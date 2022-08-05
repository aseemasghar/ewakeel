const User = require('../models/userModel');
const Cases = require('../models/caseModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail.js');
const cloudinary = require("cloudinary");


//Register user
exports.registeruser = catchAsyncErrors( async(req,res,next)=>{

    const {avatar,name,email,password,confirmPassword,role,country,city,province,address,phone,courtType} = req.body;
    if(password!==confirmPassword){
      return next(new ErrorHandler("Password does not match",400))
    }
   
    const user = await User.create({
    avatar:{public_id:"req.bod.public_id",url:"req.body.url"}, name,email,password,role,country,province,city,address,phone,courtType
    });
    sendToken(user,201,res);
     
});


// Login user
exports.loginuser = catchAsyncErrors(async(req,res,next)=>{

    const {email,password} = req.body;
// Cheking the email and password are given or not
if(!email,!password){
    return next(new ErrorHandler("Please Enter email and password",400))
}
const user = await User.findOne({email}).select("+password");
if(!user){
    return next(new ErrorHandler("Invalid Email and Password",401))
}
const isPasswordMatched = await user.comparePassword(password);
if(!isPasswordMatched){
    return next(new ErrorHandler("Invalid Credentials",401))
}

sendToken(user,200,res);

})

//Logout user
exports.logOut = catchAsyncErrors(async(req,res,next)=>{
    res.cookie("token",null,
    {
        expires:new Date(Date.now()),
        httpOnly:true,
    });
    res.status(200).json({
        success:true,
        message:"Logged out",
    })
})

//Forgot Password
exports.forgotPassword = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email});
    if(!user){
        return next(new ErrorHandler("User not found",404))
    }

    //Get Reset password token
    const resetToken = user.getResetPasswordToken();
    await user.save({validateBeforeSave : false});
    
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: `EWakeel Password Recovery`,
            message,
          });
      
          res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
          });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
    }
})

// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);
  
    res.status(200).json({
      success: true,
      user,
    });
  });

  // update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");
  
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Old password is incorrect", 400));
    }
  
    if (req.body.newPassword !== req.body.confirmPassword) {
      return next(new ErrorHandler("password does not match", 400));
    }
  
    user.password = req.body.newPassword;
  
    await user.save();
  
    sendToken(user, 200, res);
  });

  // update User Profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {

    const newUserData = {
     
      name: req.body.name,
      companyName: req.body.companyName,
      about: req.body.about,
      email: req.body.email,
      country: req.body.country,
      province: req.body.province,
      city:req.body.city,
      address: req.body.address,
      phone: req.body.phone,
      landline: req.body.landline,
      skype: req.body.skype,
      degreeName: req.body.degreeName,
      instituteName: req.body.instituteName,
      experience: req.body.experience,
      courtType: req.body.courtType,
    };

     
    if (req.body.avatar !== "") {
      const user = await User.findById(req.user.id);
  
      const imageId = user.avatar.public_id;
  
      await cloudinary.v2.uploader.destroy(imageId);
  
      const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
      });
  
      newUserData.avatar = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }
  
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    await user.save();
  
    res.status(200).json({
      success: true,
      message: "Profile Updated",
    });
  });

  exports.getMyCases = catchAsyncErrors( async (req, res,next) => {
   
      const user = await User.findById(req.user._id);
  
      const cases = [];
      for (let i = 0; i < user.cases.length; i++) {
        const Case = await Cases.findById(user.cases[i]).populate("comments.user");
        cases.push(Case);
      }
  
      res.status(200).json({
        success: true,
        cases,
      });  
  });

  // Get all users(admin)
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();
  
    res.status(200).json({
      success: true,
      users,
    });
  });
  
  // Get single user (admin)
  exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);
  
    if (!user) {
      return next(
        new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
      );
    }
  
    res.status(200).json({
      success: true,
      user,
    });
  });

  
// Delete User --Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);
  
    if (!user) {
      return next(
        new ErrorHandler(`User does not exist with Id: ${req.params.id}`, 400)
      );
    }
  
    // const imageId = user.avatar.public_id;
  
    // await cloudinary.v2.uploader.destroy(imageId);
  
    await user.remove();
  
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  });
  