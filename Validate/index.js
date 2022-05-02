const Joi = require('joi');

const signUpSchema = Joi.object({
    firstname : Joi.string().required(),
    lastname : Joi.string().required(),
    email : Joi.string().email().required(),
    password : Joi.string().min(6).required()
})
const signInSchema = Joi.object({
    email : Joi.string().email().required(),
    password : Joi.string().min(6).required()
})

module.exports = {
    signInSchema ,
    signUpSchema
}

