const mongoose = require('mongoose')

const Bookings = new mongoose.Schema({
    driver_name:{
        type:String,
        required:true
    },
    user_name:{
        type:String,
        required:true
    },
    route:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    },//pickup,destination,rent,pickup time
},{
    collection:'bookings'
});

module.exports =mongoose.model('bookings',Bookings)