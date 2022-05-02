const User = require('../model/user');
const jwt = require('jsonwebtoken')

const SignUp = (req,res) => {
    User.findOne({  email : req.body.email })
    .exec((error , user) => {
        if(error) return res.status(400).send("Something Went Wrong");
        if(user) return res.status(409).send('User Already Exist');
        else {
            const {
               firstname , lastname , email , password
            } = req.body;
            const _user = new User({firstname,lastname,email,password});
            _user.save((error , result) => {
                if(error) return res.status(400).send("Something Went Wrong");
                if(result) return res.status(200).send('User Created Successfully');
            })
        }
    })

}

const SignIn = (req,res) => {
    User.findOne({email : req.body.email})
    .exec((error , user) => {
        if(error) return res.status(400).send('Something Went Wrong');
        // if(error) return res.status(400).json({error})
        if(user){
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id : user._id} , process.env.SCRETE_KEY)
                res.cookie('token' , token );
                res.status(200).json({user,token});
            }
            else { 
                return res.status(401).send("Invalid Password...")
            }
        } 
        else return res.status(404).send('User not Fount');
        
    })
}
const SignOut = (req,res) => {
    return res.clearCookie('token').status(200).send("Logout...");
}
module.exports = {SignIn,SignUp,SignOut}