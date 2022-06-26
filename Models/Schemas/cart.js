const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId:{
        type : String,
        required : true
    },
    items:{
        type : String,
        required: true
    }
})

module.exports = mongoose.model('cart', cartSchema)