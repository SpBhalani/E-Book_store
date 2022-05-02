const route = require('express').Router();
const {SignUp , SignIn , SignOut} = require('../controller/user');
const { signInValidate , signUpValidate } = require('../Validate/auth')
const requireSignin = require('../middeleware/index')


route.post('/signin' ,signInValidate, SignIn);
route.post('/signup' ,signUpValidate , SignUp);
route.post('/signout',requireSignin  , SignOut);


module.exports = route;



