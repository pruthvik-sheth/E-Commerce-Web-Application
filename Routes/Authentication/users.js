const express = require('express')
const route = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authenticate = require('../../middleware/authentication')

//importing user schema
const User = require('../../Database/Schemas/user')

// this function is used to enocode the password using bcrypt
const encodePass = async (pass) => {
    try {
        return bcrypt.hash(pass, 10)
    } catch (error) {
        console.log("error while encoding the password")
    }
}

route.post('/register', async (req, res) => {
    try {
        
        // it will check whether the user is already registered or not
        const userEmail = await User.findOne({ email: req.body.email })

        if (userEmail === null) { //if there is no user registered

            // encrypting the password
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
        else { // if user already exist with the same email
            
            res.status(401).json({ message: "Email already exists!", success: false })
        
        }

    } catch (err) {  // any error in the registration operations
    
        console.log("Error generated while user registration")
        res.status(401).json({ message: "User Not Registered " + err, success: false })
    
    }
})

route.post('/login', async (req, res) => {
    try {

        //finding user with email
        const user = await User.findOne({ email: req.body.email })
        
        if (user !== null) { //if user exists

            //verifying user encrypted password
            const passResult = await bcrypt.compare(req.body.password, user.password)

            if (passResult) { //if user password is correct

                // Creating a token
                const token = jwt.sign({
                    userId: user._id,
                    email: req.body.email
                },
                    process.env.JWT_SECRET)

                // saving jwttoken in the cookie
                res.cookie("jwttoken", token, {
                    httpOnly: true
                })

                //saving user first name in the cookie
                res.cookie("user", user.firstName)

                res.status(200).json({ message: "Logged In Succesfully", success: true, userName: user.firstName })
            
            }
            else { // if incorrect password
                
                res.status(401).json({ message: "Incorrect Password", success: false })
            
            }
        } else { //if incorrect user email
            
            res.status(401).json({ message: "Incorrect Email", success: false })
        
        }

    } catch (err) {  // error in making any operation while login
        console.log("Error Generated while login");
        res.status(401).json({ message: "Error while login", success: false })
    }
})

route.get('/logout', authenticate, (req, res) => {
    try {

        // clearing out all the cookies 
        res.clearCookie('jwttoken')
        res.clearCookie('user')

        //sending success message
        res.status(200).json({ message: "Logged out successfully!", success: true })
    
    } catch (err) { //any error while logout operation 

        console.log("Error while logging out")
        res.status(401).json({ message: "Logging out error", success: false })
    }
})

module.exports = route