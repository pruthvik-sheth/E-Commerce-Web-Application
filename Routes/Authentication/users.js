const express = require('express')
const route = express.Router()
const bcrypt = require('bcrypt')

//importing user schema
const User = require('../../Models/Schemas/user')

const encodePass = async (pass) => {
    try {
        console.log("Encoding the pass");
        return bcrypt.hash(pass,10)
    } catch (error) {
        console.log("error while encoding the password")
    }
}

route.post('/register',async (req, res)=> {
    try {
        req.body.password = await encodePass(req.body.password)
        const user = await User.create({
            firstName : req.body.firstname,
            lastName : req.body.lastname,
            email : req.body.email,
            password : req.body.password
        })
        res.status(200).json({ message : "User Successfully Registered", success : true})
    } catch (err) {
        res.status(401).json({ message : "User Not Registered" + err, success : false})
    }
})

route.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({ email : req.body.email})
        if (user !== null){
            const passResult = await bcrypt.compare(req.body.password, user.password)
            if (passResult) {
                res.status(200).json({ message : "Logged In Succesfully", success : true})
            }
            else{
                res.status(401).json({ message : "Incorrect Password", success : false})
            }
        }else{
            res.status(401).json({message : "Incorrect Username", success : false})
        }
        
        
    } catch (err) {
        console.log("Error Generated while login" + err);
    }
})

module.exports = route