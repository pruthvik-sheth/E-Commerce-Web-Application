const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{

    }
})

module.exports = mongoose.model('user', userSchema)