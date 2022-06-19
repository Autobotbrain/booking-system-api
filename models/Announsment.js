const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnnousmentSchema = new Schema({
    Title:{
        type: String,
        required:true
    },
    Description:{
        type: String,
        required:true
    }
     
}); 

module.exports = mongoose.model("announsments", AnnousmentSchema);