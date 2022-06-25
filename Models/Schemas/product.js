const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{

    }
})

module.exports = mongoose.model('product', productSchema)