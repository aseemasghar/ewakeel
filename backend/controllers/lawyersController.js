const Lawyer = require('../models/lawyersModel');

exports.createLawyer = async (req,res,next)=>{

const lawyer = await Lawyer.create(req.body);

res.status(201).json({

    success : true,
    lawyer

})

}



exports.getAllLawyers =async (req,res)=>{

    const lawyers = await Lawyer.find();

    res.status(200).json({
        success:true,
        lawyers
    })
}

exports.updateLawyer = async(req,res,next)=>{
    let lawyer = await Lawyer.findById(req.params.id);
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
}

exports.deleteLawyer = async(req,res,next)=>{
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

}


