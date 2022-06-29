const express = require("express");
const route = express.Router();

//importing product schema
const Product = require("../../Database/Schemas/product");


//routes
route.get("/products", async (req, res) => {

  try {

    const products = await Product.find();
    res.status(200).json({ message: "Successfully found the products", success: true, products: products });
  
  } catch (err) {

    res.status(404).json({ message: "Error while loading the products", success: false });
  
  }
});

route.get("/products/:id", async (req, res) => {
  try {
    
    const product = await Product.findById(req.params.id);
    res.status(200).json({ message: "Successfully found the products", success: true, product: product });
  
  } catch (err) {
    
    res.status(404).json({ message: "Error while loading the products", success: false });
  
  }
});


module.exports = route;