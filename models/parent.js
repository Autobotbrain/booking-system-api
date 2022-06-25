const mongoose = require('mongoose');

const Schema = mongoose.Schema;



var parentSchema = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    //confirmpassword: { type: String, required: true },
    nic: { type: String, required: true },
    address: { type: String, required: true },
    contactNumbers: { type: Number, required: true },
    childName: { type: String, required: true },
    childSchool: { type: String, required: true },
    tag: { type: String, required: true }

});
module.exports = mongoose.model('parent', parentSchema);


