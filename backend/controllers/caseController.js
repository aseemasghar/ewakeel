const Cases = require('../models/caseModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');



// Creat new case
exports.createCase =catchAsyncErrors( async (req,res,next)=>{
    const{
         title,city, description
    }= req.body;
   const user = req.user.id;
const Case = await Cases.create({user,title,city,description});
res.status(201).json({

    success : true,
    Case
})
})


// Get cases
exports.getAllCases = catchAsyncErrors( async (req,res)=>{
    // const user = req.user.id;
    const Case = await Cases.find();

    res.status(200).json({
        success:true,
        Case
    })
})
// Update Case
exports.updateCase = catchAsyncErrors(async(req,res,next)=>{
    const Case = await Cases.findById(req.params.id);
    if(!Case){
        return res.status(500).json({
            success:false,
            message:"Case not found"
        })
    }

    Case = await Cases.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        success:true,
        Case
    })
})

// Delete case
exports.deleteCase = catchAsyncErrors( async(req,res,next)=>{
    const Case = await Cases.findById(req.params.id);
    if(!Case){
        return res.status(500).json({
            success:false,
            message:"Case not found"
        })
    }
    await Case.remove();
    res.status(200).json({
        success:true,
        message:"Case deleted Successfully"
    })

})

//Get single case Details
exports.getCaseDetails = catchAsyncErrors( async (req,res,next)=>{

    const Case = await Cases.findById(req.params.id);
    if(!Case){
        return next(new ErrorHandler("Case not found",404))
    }
   
    res.status(200).json({
        success:true,
        Case
    })
    
})


