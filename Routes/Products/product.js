const express = require("express");
const route = express.Router();
const jwt = require("jsonwebtoken");

//importing product schema
const Product = require("../../Models/Schemas/product");
const Cart = require("../../Models/Schemas/cart");

//helper function
const decodeToken = async (token) => {
  const decodedToken = await jwt.decode(token);
  console.log(decodedToken.userID);
  return decodedToken.userId;
};

//routes
route.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Successfully found the products",
      success: true,
      products: products,
    });
  } catch (err) {
    res
      .status(404)
      .json({ message: "Error while loading the products", success: false });
  }
});

route.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      message: "Successfully found the products",
      success: true,
      product: product,
    });
  } catch (err) {
    res
      .status(404)
      .json({ message: "Error while loading the products", success: false });
  }
});

route.post("/addcart", async (req, res) => {
  try {
    const userid = await decodeToken(req.cookies.jwttoken);
    const user = await Cart.findOne({ _id: userid });
    if (user) {
      user.items = req.body.items
      await user.save();
      res.status(200).json({
        message: "Product Added to the cart",
        success: true,
        cart: userCart,
      });
    } else {
      const userCart = await Cart.create({
        userID: userid,
        items: req.body.items,
      });
      res.status(200).json({
        message: "Product Added to the cart",
        success: true,
        cart: userCart,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Error while adding cart", success: false });
  }
});

module.exports = route;
