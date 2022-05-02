const User = require('../model/user');
 const userData = (req,res) => {
    User.find({})
    .exec((error,data) => {
        if(error) return res.status(400).send("Something Went Wrong");
        if(data) return res.status(200).json({data});
    })
}
module.exports = userData;