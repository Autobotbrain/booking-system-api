const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ShareLocationSchema = new Schema({
    latitude:{
        type:String,
        required:true
    },
    longitude:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('ShareLocation',ShareLocationSchema)