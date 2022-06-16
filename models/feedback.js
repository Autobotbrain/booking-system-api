const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
//id: { type: String, required: true },
    name: { type: String,required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    userId: { type: String, required: true },
    driverId: { type: String, required: true }
}, {
   //timestamps: true
});

module.exports = mongoose.model('Feedback', feedbackSchema);