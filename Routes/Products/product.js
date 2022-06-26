const express = require('express')
const route = express.Router()

//importing product schema
const Product = require('../../Models/Schemas/product')
const Cart = require('../../Models/Schemas/cart')

//routes
route.get('/products', async (req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json({message:"Successfully found the products", success:true, products : products})   
    } catch (err) {
        res.status(404).json({message:"Error while loading the products", success:false})        
    }
})

route.get('/products/:id', async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json({message:"Successfully found the products", success:true, product : product})   
    } catch (err) {
        res.status(404).json({message:"Error while loading the products", success:false})        
    }
})

// route.post('/addcart', async (req, res) => {
//     try {
//         const userCart = await Cart.create({
//             userID : req.body.userId,
//             items : req.body.items})

//         res.status(200).json({message : "Product Added to the cart", success: true, cart : userCart})
//     } catch (err) {
//         console.log(err)
//         res.status(404).json({message:"Error while adding cart", success:false})
//     }
// })

module.exports = route