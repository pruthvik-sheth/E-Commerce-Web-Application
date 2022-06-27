const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    items:[{
        item:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "product"
        },
        quantity: {
            type : Number,
            default : 1
        }
    }]
})

cartSchema.virtual('Products', {
    ref : 'product',
    localField : 'items.item',
    foreignField : '_id'
})


module.exports = mongoose.model('cart', cartSchema)