const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
    try{
        const token = req.cookies["jwttoken"]

        const result = await jwt.verify(token, process.env.JWT_SECRET)
        if (result){
            next()
        }else{
            res.status(400).json({message : "Authorization error", success : false})
        }
    }catch(err){
        console.log(err)
        res.status(400).json({message : "Authorization error", success : false})
    }
}

module.exports = verifyToken