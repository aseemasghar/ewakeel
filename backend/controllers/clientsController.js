const Client = require('../models/clientsModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');


//Register Client
exports.registerClient = catchAsyncErrors( async(req,res,next)=>{
    const {name,email,password} = req.body;

    const client = await Client.create({

        name,email,password
    });

    sendToken(client,201,res);
});


// Login Client
exports.loginClient = catchAsyncErrors(async(req,res,next)=>{

    const {email,password} = req.body;
// Cheking the email and password are given or not
if(!email,!password){
    return next(new ErrorHandler("Please Enter email and password",400))
}
const client = await Client.findOne({email}).select("+password");
if(!client){
    return next(new ErrorHandler("Invalid Email and Password",401))
}
const isPasswordMatched = await client.comparePassword(password);
if(!isPasswordMatched){
    return next(new ErrorHandler("Invalid Credentials",401))
}

sendToken(client,200,res);

})

//Logout Client
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