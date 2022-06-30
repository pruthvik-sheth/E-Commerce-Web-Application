const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    items: [{
        item: {
            type: mongoose.Types.ObjectId,
            ref: "product"
        },
        quantity: {
            type: Number,
            default: 1
        }
    }]
})

cartSchema.methods.toJSON = function () {
    const cart = this.toObject()
    delete cart.userId
    delete cart._id
    cart.items.forEach((i) => {
        delete i._id
    })
    return cart
}



module.exports = mongoose.model('cart', cartSchema)