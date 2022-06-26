const express = require('express')
const route = express.Router()

//importing product schema
const Product = require('../../Models/Schemas/product')

//routes
route.get('/',(req,res)=>{
    console.log("Welcome to the product page")
    res.json({message:"welcome to the product page", success:true})
})

module.exports = route