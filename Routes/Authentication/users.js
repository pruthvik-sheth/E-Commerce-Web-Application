const express = require('express')
const mongoose = require('mongoose')
const route = express.Router()

//importing user schema
const User = require('../../Models/Schemas/user')

route.post('/register',async (req, res)=> {
    try {
        const user = await User.create({
            firstName : req.body.firstname,
            lastName : req.body.lastname,
            email : req.body.email,
            password : req.body.password
        })
        res.status(200).json({ message : "User Successfully Registered", success : true})
    } catch (err) {
        res.status(401).json({ message : "User Not Registered", success : false})
    }
})

module.exports = route