const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authenticate = require('./middleware/authentication')
const cookie = require('cookie-parser')

//importing all the routes
const userRoute = require('./Routes/Authentication/users')
const productRoute = require('./Routes/Products/product')

//all the variables for mongodb connection
const url = process.env.MONGODB_URL
const dbName = process.env.MONGODB_DATABASE

//making the connection
mongoose.connect(url+dbName)
const con = mongoose.connection

//checking the connection
con.on('open', ()=>{
    console.log("Connection established with database")
})

//initiating the server
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(cookie())

//routes
app.use('/user',userRoute)
app.use('/product',  authenticate , productRoute)


//listening on the desired port
app.listen(process.env.PORT, ()=>{
    console.log(`Express Server Started listening on the PORT: ${process.env.PORT}`)
})