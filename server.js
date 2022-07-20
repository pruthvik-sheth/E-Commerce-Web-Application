const express = require('express')
const cors = require('cors')
const authenticate = require('./middleware/authentication')
const cookie = require('cookie-parser')
const path = require('path')
const dbConnection = require('./Database/getConnection')

//importing all the routes
const userRoute = require('./Routes/Authentication/users')
const productRoute = require('./Routes/Products/product')
const cartRoute = require('./Routes/Products/cart')

//opening connection to the database
dbConnection.getConnection()

//initiating the server
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(cookie())

//routes
app.use('/user', userRoute)
app.use('/product', productRoute)
app.use('/cart', authenticate, cartRoute)

//
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"))
})


//listening on the desired port
app.listen(process.env.PORT, () => {
    console.log(`Express Server Started listening on the PORT: ${process.env.PORT}`)
})