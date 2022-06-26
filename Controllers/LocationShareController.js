const User = require("../models/LocationShareModule");

const addLocation = async(req,res,next) => {
    
    const { latitude,longitude} = req.body;
    let anno;
    try {
        anno = new User({
            latitude,
            longitude,
        });

        anno.save()
    }
    
    catch (err) {
        console.log(err);

    }
    return res.status(200).json({ anno });
    
}






const getLocation = async (req, res, next) => {
    let anno;
    try {
        anno = await User.find();
    }
    catch (err) {
        console.log(err);
    }

    if (!anno) {
        return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ anno });
}




module.exports = {addLocation,getLocation};