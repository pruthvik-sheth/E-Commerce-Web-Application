const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId:{
        type : mongoose.Types.ObjectId,
        required : true
    },
    items:[{
        item:{
            type : mongoose.Types.ObjectId,
            ref : "product"
        },
        quantity: {
            type : Number,
            default : 1
        }
    }]
})



module.exports = mongoose.model('cart', cartSchema)