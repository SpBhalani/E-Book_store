const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    hash_password : String,
    roleid : {
        type:String,
        default:'buyer'
    } ,
} , {timestamps:true})

userSchema.virtual('password').set(function  (password) {
    this.hash_password =  bcrypt.hashSync(password , 10);
})

userSchema.methods ={
    authenticate : function(password) {
        return bcrypt.compareSync(password , this.hash_password);
    }
}

module.exports = mongoose.model('User' , userSchema);