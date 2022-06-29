const express = require('express')
const route = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authenticate = require('../../middleware/authentication')

//importing user schema
const User = require('../../Models/Schemas/user')

const encodePass = async (pass) => {
    try {
        return bcrypt.hash(pass, 10)
    } catch (error) {
        console.log("error while encoding the password")
    }
}

route.post('/register', async (req, res) => {
    try {
        const userEmail = await User.findOne({ email: req.body.email })

        if (userEmail === null) {
            req.body.password = await encodePass(req.body.password)

            //storing user to the database
            const user = await User.create({
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                email: req.body.email,
                password: req.body.password
            })

            res.status(201).json({ message: "User Successfully Registered", success: true, user: user })
        }
        else {
            res.status(401).json({ message: "Email already exists!", success: false })
        }

    } catch (err) {
        res.status(401).json({ message: "User Not Registered " + err, success: false })
    }
})

route.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user !== null) {
            const passResult = await bcrypt.compare(req.body.password, user.password)
            if (passResult) {

                // Creating a token
                const token = jwt.sign({
                    userId: user._id,
                    email: req.body.email
                },
                    process.env.JWT_SECRET)

                // saving user token to the database
                res.cookie("jwttoken", token, {
                    httpOnly: true
                })

                res.cookie("user", user.firstName)

                res.status(200).json({ message: "Logged In Succesfully", success: true, userName: user.firstName })
            }
            else {
                res.status(401).json({ message: "Incorrect Password", success: false })
            }
        } else {
            res.status(401).json({ message: "Incorrect Username", success: false })
        }


    } catch (err) {
        console.log("Error Generated while login" + err);
    }
})

route.get('/logout', authenticate, (req, res) => {
    try {
        res.clearCookie('jwttoken')
        res.clearCookie('user')
        res.status(200).json({ message: "Logged out successfully!", success: true })
    } catch (err) {
        console.log("Error while logging out")
        res.status(401).json({ message: "Logging out error", success: false })
    }
})

module.exports = route