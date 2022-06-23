const Payment = require("../models/payment");

//Read(get)
const getAllPayment = async(req, res, next) =>{
    
    await Payment.find()
    .then((anno)=>{
        console.log(anno);
        res.status(200).send(anno)
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send(err)
    })
}

const approvepayment =async(req, res, next) =>{
    const peyment = new Payment(req.body)
    peyment.save()
    .then((pay)=>{
        res.status(200).send(pay)
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send(err)
    })

}





module.exports = {getAllPayment,approvepayment};