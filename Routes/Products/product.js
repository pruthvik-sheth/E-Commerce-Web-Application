const express = require("express");
const route = express.Router();
const multer = require('multer');
const sharp = require('sharp');

//importing product schema
const Product = require("../../Database/Schemas/product");

//For Uploading Images
const upload = multer({
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      callback(new Error('Please upload an Image file'));
    }

    callback(undefined, true);
  }
})

//routes

route.post("/addproduct", upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('Product Image is required');
    }
    try {
      const image = await sharp(req.file.buffer).png().toBuffer();

      const newProduct = await Product.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description,
        amount: req.body.amount,
        discount: req.body.discount,
        category: req.body.category,
        productImage: image
      })

      res.status(200).json({ message: "Products Added to the Database!", success: true, product: newProduct, });
    }
    catch (err) {

      console.log("Error generated while adding product" + err);
      res.status(404).json({ message: "Error while adding product", success: false });

    }
  }
  catch (err) {
    res.status(500).json({ message: "An error occured while posting product", success: false });
  }
})

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