const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv =require('dotenv')
const cors = require('cors')
const routesUrls =require('./routes/routes')
const paymentRoutes = require('./routes/paymentRoute')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

app.use(express.json())
app.use(cors())

app.use('/app',routesUrls)

//---if this one is use NOT WORKING----
app.use('/payment',paymentRoutes)


app.listen(4000, () => console.log("server is up and running"))

//Chamika