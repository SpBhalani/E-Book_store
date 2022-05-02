const jwt = require('jsonwebtoken')

const requireSignin = async (req,res,next) => {
    if(!req.cookies.token) return res.status(400).send('Reuire Signin')
    const token = req.cookies?.token;
    const user = await jwt.verify(token , process.env.SCRETE_KEY);
    if(!user) return res.status(400).send('Reuire Signin')
    req.user = user;
    next();
}

module.exports = requireSignin;
