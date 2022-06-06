const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

    amount:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    method:{
        type: String,
        required:true
    }

}); 

module.exports = mongoose.model("Payments", PaymentSchema);