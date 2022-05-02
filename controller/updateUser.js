const User = require('../model/user');
const updateUser = (req , res) =>{
    const {_id,firstname,lastname,email,roleid} = req.body;
    User.findByIdAndUpdate({_id},{
        firstname,lastname,email,roleid
    },{new:true})
    .exec((error,data) => {
        if(error) return res.status(400).send("Something Went wrong");
        if(data) return res.status(200).json({data});
    })
}
module.exports = updateUser