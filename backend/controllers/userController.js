const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');


//Register user
exports.registeruser = catchAsyncErrors( async(req,res,next)=>{
    const {name,email,password} = req.body;

    const user = await User.create({

        name,email,password
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