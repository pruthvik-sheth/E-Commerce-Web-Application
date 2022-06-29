const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
    try{

        // this will extract token from the cookies
        const token = req.cookies["jwttoken"]

        //this will verify token and will return the decoded data
        const result = jwt.verify(token, process.env.JWT_SECRET)
        
        if (result.userId){ //if the token verified correctly
        
            //adding decoded userid to the request
            req.userId = result.userId
            next()
        
        }else{
        
            res.status(400).json({message : "Authorization error", success : false})
        
        }
    
    }catch(err){

        console.log("Error Generated while authorization")
        res.status(400).json({message : "Authorization error", success : false})
    
    }
}

module.exports = verifyToken