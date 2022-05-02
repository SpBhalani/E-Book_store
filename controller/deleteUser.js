const User = require('../model/user');

const deleteUser = (req,res) => {
    User.deleteOne({_id:req.body._id})
    .exec((error,data) => {
        if(error) return res.status(400).send("Something Went Wrong");
        if(data) return res.status(200).json({data});
    })
}
module.exports = deleteUser;