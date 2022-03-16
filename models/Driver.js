const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var DriverSchema = new Schema({
        FirstName:{type:String,required:true},
        LastName:{type:String,required:true},
        Email:{type:String,required:true},
        Password:{type:String,required:true},
        ConfirmPassword:{type:String,required:true},
        Phone_Number:{type:Number,required:true},
        NIC_Number:{type:String,required:true},
        Driving_Licence_Id:{type:String,required:true},
        Address:{type:String,required:true},
});

module.exports = mongoose.model('Driver',DriverSchema);