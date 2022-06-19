const FeedBack = require("../models/FeedBack");


//Read(get)
const getAllFeedBacks = async(req, res, next) =>{
    let anno;
try{
    anno= await FeedBack.find();
} 
catch (err) {
    console.log(err);
}

if(!anno){
    return res.status(404).json({message :"No FeedBacks Found"});
}
return res.status(200).json({ anno }); //Array name 
}


//Delete
const deleteFeedback = async(req, res, next) =>{
    const id = req.params.id;
    let anno;
    try{
        anno = await Announsment.findByIdAndRemove(id);
    }
    catch(err){
         console.log(err);
    }
    if(!anno){
        return res.status(404).json({message:"unable to Delete"});
    }
    return res.status(200).json({ message : "Product Successfully Deleted"});
}

module.exports = {getAllFeedBacks,deleteFeedback};
