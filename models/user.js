const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    address:{type:String,required:true},
    contactNumbers:{type:Number,required:true},
    locations:{type:String,required:true}
});

module.exports = mongoose.model('User',userSchema);