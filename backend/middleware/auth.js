const catchAsyncErrors = require('./catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');
const jwt = require('jsonwebtoken');
const user = require('../models/userModel');

exports.isAuthenticateduser = catchAsyncErrors(async(req,res,next)=>{

    const { token } = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please Login first",401));
        }
        const decodedData = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await user.findById(decodedData.id);
        next();
});
exports.authorizeRoles = (...Roles)=>{
    return (req,res,next)=>{
        if(!Roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role :${req.user.role} is not allowd to access the resources`,403))
        }
        next()
    }
    }