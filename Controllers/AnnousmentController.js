const Announsment = require("../models/Announsment");


//Read(get)
const getAllAnnounsments = async(req, res, next) =>{
    let anno;
try{
    anno= await Announsment.find();
} 
catch (err) {
    console.log(err);
}

if(!anno){
    return res.status(404).json({message :"No Announsments Found"});
}
return res.status(200).json({ anno }); //Array name 
}

//Create(put)
const addAnnounsment = async(req,res,next) => {
    
    const {Title,Description} = req.body;
    let anno;
    try{
        anno = new Announsment({
            Title,
            Description
            
        });
        await anno.save()
    } 
    catch(err){ 
        console.log(err);
       
    }

    if(!anno){
        return res.status(500).json({message:'unable to add'})
    }
    return res.status(201).json({anno});
}


//Get by id


const getById = async (req,res, next) => {
    const id = req.params.id;
    let anno;
    try{
        anno = await Announsment.findById(id);
    }
    catch{
        console.log(err);
    }

    if(!anno){
        return  res.status(404).json({message: "No Book found"});
    }
    return res.status(200).json({anno})

}

//Update
const UpdateAnnounsment = async(req, res, next)=>{
    const id = req.params.id;
    const {Title,Description} = req.body;
    let anno;
    try{
        anno = await Announsment.findByIdAndUpdate(id,{
            //feelds that need to update
            Title,
            Description,
        });
        anno = await anno.save();
    }
    catch(err){
        console.log(err);
    }

    if(!anno){
        return res.status(404).json({message:"unable to update"});
    }
    return res.status(201).json({message:"Successfully Updated"});
    
}

//Delete
const deleteAnnounsment = async(req, res, next) =>{
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


module.exports = {getAllAnnounsments,addAnnounsment,getById,UpdateAnnounsment,deleteAnnounsment};

