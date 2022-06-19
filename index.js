const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv =require('dotenv')
const cors = require('cors')

const UserRoute = require('./routes/vehicleownerRoute')
const annousmentRoutes = require('./routes/annousmentRoute')
const paymentRoutes = require('./routes/paymentRoute')
const feedbackRoute = require('./routes/feedbackRoute')
const ordersRoute = require('./routes/ordersRoute')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

app.use(express.json())
app.use(cors())

app.use('/VehicleOwner',UserRoute)
app.use('/app',annousmentRoutes)
app.use('/payment',paymentRoutes)
app.use('/feedback',feedbackRoute)
app.use('/orders',ordersRoute)


app.listen(4000, () => console.log("server is up and running"))
