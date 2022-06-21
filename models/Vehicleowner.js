const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const VehicleownerSchema = new Schema({
    VehicleOwner:{
        type:String,
        required:true
    },
    VehicleModel:{
        type:String,
        required:true
    },
    VehicleNumber:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        required:true
    },
    Seats:{
        type:String,
        required:true
    },
    ID:{
        type:String,
        required:true
    },
    MNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        
    },
    Date:{
        type:Date,
        default:Date.now
    },
    tag:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Vehicleowners',VehicleownerSchema)