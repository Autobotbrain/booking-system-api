const mongoose =require("mongoose")
const Schem =mongoose.Schema;

function FormatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const ImageSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:false
    },
    date:{
        type:String,
        default:FormatDate(Date.now())
    }
})
module.exports = mongoose.model("Images",ImageSchema);