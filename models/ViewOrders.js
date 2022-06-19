const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrdersSchema = new Schema({

    user:{
        type: String,
        required:true
    },
    ptime:{
        type: String,
        required:true
    },
    atime:{
        type: String,
        required:true
    },
    cost:{
        type: String,
        required:true
    }

}); 

module.exports = mongoose.model("orders", OrdersSchema);