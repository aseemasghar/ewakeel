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




hjghjghjgjhghjhjg