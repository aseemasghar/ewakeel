const Cases = require('../models/caseModel');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');



// Creat new case
exports.createCase =catchAsyncErrors( async (req,res,next)=>{
    const newCase = {
         title:req.body.title,
         city:req.body.city,
        description:req.body.description,
        user : req.user._id,
    };
   
const Case = await Cases.create(newCase);
const user = await User.findById(req.user._id);
user.cases.unshift(Case._id);
await user.save();
res.status(201).json({

    success : true,
    Case
})
})


// Get cases
exports.getAllCases = catchAsyncErrors( async (req,res)=>{
    // const user = req.user.id;
    const cases = await Cases.find().populate("user");

    res.status(200).json({
        success:true,
        cases:cases.reverse(),
    })
})
// Update Case
exports.updateCase = catchAsyncErrors(async(req,res,next)=>{
    var Case = await Cases.findById(req.params.id);
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
    // if (Case.user.toString() !== req.user._id.toString()) {
    //     return res.status(401).json({
    //       success: false,
    //       message: "Unauthorized",
    //     });
    await Case.remove();

        const user = await User.findById(req.user._id);
    
        const index = user.cases.indexOf(req.params.id);
        user.cases.splice(index, 1);
    
        await user.save();

    res.status(200).json({
        success:true,
        message:"Case deleted Successfully"
    })

})
//Bidding on Case

exports.bidOnCase = catchAsyncErrors( async (req, res,next) => {
      const Case = await Cases.findById(req.params.id);
  
      if (!Case) {
        return res.status(404).json({
          success: false,
          message: "Case not found",
        });
      }
  
        Case.comments.push({
          user: req.user._id,
          comment: req.body.comment,
        });
  
        await Case.save();
        return res.status(200).json({
          success: true,
          message: "Bid add Successfuly",
        });
  });


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


