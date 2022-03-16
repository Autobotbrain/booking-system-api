const express =require ('express')
const bookingRoutes =express.Router()

let Bookings =require ('../models/Bookings')

bookingRoutes.route('/add').post(function (req,res){
    let bookings=new Bookings(req.body)
    bookings.save()
        .then(bookings=>{
            res.status(200).json({'bookings':'Booking was aded'})
        })
        .catch(err=>{
            res.status(400).send("Unable to add booking")
        })
})

bookingRoutes.route('/').get(function(req,res){
    Bookings.find(function(err,bookings){
        if(err){
            console.log(err);
        }
        else{
            res.json(bookings);
        }
    });
});

bookingRoutes.route('/delete/:id').get(function (req,res){
    Bookings.findByIdAndRemove({id:req.params.id},function(err,bookings){
        if(err)res.json(err)
        else res.json("Booking successfully removed!")
    })

})

module.exports=bookingRoutes