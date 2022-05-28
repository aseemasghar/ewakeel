const Lawyer = require('../models/lawyersModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.createLawyer =catchAsyncErrors( async (req,res,next)=>{

const lawyer = await Lawyer.create(req.body);

res.status(201).json({

    success : true,
    lawyer
})
})



exports.getAllLawyers = catchAsyncErrors( async (req,res)=>{

    const lawyers = await Lawyer.find();

    res.status(200).json({
        success:true,
        lawyers
    })
})

exports.updateLawyer = catchAsyncErrors(async(req,res,next)=>{
    const lawyer = await Lawyer.findById(req.params.id);
    if(!lawyer){
        return res.status(500).json({
            success:false,
            message:"Lawyer not found"
        })
    }

    lawyer = await Lawyer.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        success:true,
        lawyer
    })
})

exports.deleteLawyer = catchAsyncErrors( async(req,res,next)=>{
    const lawyer = await Lawyer.findById(req.params.id);
    if(!lawyer){
        return res.status(500).json({
            success:false,
            message:"Lawyer not found"
        })
    }
    await lawyer.remove();
    res.status(200).json({
        success:true,
        message:"Lawyer deleted Successfully"
    })

})


exports.getLawyerDetails = catchAsyncErrors( async (req,res,next)=>{

    const lawyer = await Lawyer.findById(req.params.id);
    if(!lawyer){
        return next(new ErrorHandler("Lawyer not found",404))
    }
   
    res.status(200).json({
        success:true,
        lawyer
    })
    
})


