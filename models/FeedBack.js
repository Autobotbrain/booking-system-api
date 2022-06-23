const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FeedBAckSchema = new Schema({

    id:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    comment:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    rating:{
        type: String,
        required:true
    },
    userId:{
        type: String,
        required:true
    },
    driverId:{
        type: String,
        required:true
    },
    createdAt:{
        type: String,
        required:true
    },
    updatedAt:{
        type: String,
        required:true
    }

}); 

module.exports = mongoose.model("feedbacks", FeedBAckSchema)