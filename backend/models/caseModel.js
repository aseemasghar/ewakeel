const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({

  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
},
    title: {
        type: String,
        required: [true, "Please Enter case title"],
      },
      city: {
        type: String,
        required: [true, "Please Enter your city name"],
      },
      date: {
        type: Date,
        default : Date.now,
      },
      description: {
        type: String
      }

});

module.exports = mongoose.model("Cases", caseSchema);