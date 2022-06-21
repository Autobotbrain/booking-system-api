const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PermissionRequestSchema = new Schema({

    passengerId:{
        type: String,
        required:true
    },
    state:{
        type:Boolean,
        required:true
    }
   

}); 

module.exports = mongoose.model("PermissionRequest", PermissionRequestSchema)