const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId:{
        type : String,
        required : true
    },
    items:[{
        type : String
    }]
})

module.exports = mongoose.model('cart', cartSchema)