const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const routesUrls =require('./routes/routes')
const path =require('path')
const cors = require('cors')
const fileUpload=require('express-fileupload')
const bodyParser=require('body-parser')
const bookingRoutes=require('./routes/booking')
const UserRoute = require('./routes/vehicleownerRoute')
const annousmentRoutes = require('./routes/annousmentRoute')
const paymentRoutes = require('./routes/paymentRoute')
const feedbackRoute = require('./routes/feedbackRoute')
const ordersRoute = require('./routes/ordersRoute')
const viewordersRoute = require('./routes/viewbookingRoute')
const CheckVehiclesRoute = require('./routes/ckeckvehiclesRoute')
const GetPermissionRoute =require('./routes/PermissionRequest')
const staffmemberRoute =require('./routes/StaffmemberRoutes')

const Image = require("./models/Image")

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected")).catch(err=>console.log(err))

app.use(express.json())
app.use(cors())
app.use('/app',  routesUrls)
app.listen(4000, () => console.log("server is up and running port 4000"))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/bookings',bookingRoutes)
//app.use('/payment',bookingRoutes)
app.use('/VehicleOwner',UserRoute)
//app.use('/resovation',bookingRoutes)
app.use('/app',annousmentRoutes)
app.use('/payment',paymentRoutes)
app.use('/feedback',feedbackRoute)
app.use('/orders',ordersRoute)

app.use('/vieworders',viewordersRoute)
app.use('/checkVehicles',CheckVehiclesRoute)
app.use('/getPermissionRoute',GetPermissionRoute)
app.use('/staffmemberRoute',  staffmemberRoute)



app.use(fileUpload())

app.post('/upload',(req,res)=>{
    if(req.files===null){
        return res.status(400).json({msg:'No files to upload'})
    }
    const file =req.files.file;
    console.log(__dirname)

    file.mv(`models/uploads/${file.name}`,err=>{
        if(err){
            console.error(err);
            res.status(500).send(err)
        }
        let img = new Image({
            photo:`/uploads/${file.name}`
        })
        img.save();
        res.json({fileName:file.name,filePath:`/uploads/${file.name}`})
    })
    
    

})

const corsOptions={
    origin:'*',
    optionSuccessStatus:200,
    
}

app.use(cors(corsOptions))
