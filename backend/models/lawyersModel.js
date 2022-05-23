const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Enter your Name"],
        trim: true,
      },
      email: {
        type: String,
        required: [true, "Please Enter your email"],
      },
      phone: {
        type: Number,
        required: [true, "Please Enter your phone no"],
        maxLength: [14, "Phone cannot exceed 8 characters"],
      },
      adress: {
        type: String
        
      }

});

module.exports = mongoose.model("Lawyer", lawyerSchema);