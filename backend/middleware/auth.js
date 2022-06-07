const catchAsyncErrors = require('./catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');
const jwt = require('jsonwebtoken');
const Client = require('../models/clientsModel');

exports.isAuthenticatedClient = catchAsyncErrors(async(req,res,next)=>{

    const { token } = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please Login first",401));
        }
        const decodedData = jwt.verify(token,process.env.JWT_SECRET);
        req.client = await Client.findById(decodedData.id);
        next();
});