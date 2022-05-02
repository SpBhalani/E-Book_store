const deleteUser = require('../controller/deleteUser');
const updateUser  = require('../controller/updateUser');
const userData  = require('../controller/userData');
const requireSignin = require('../middeleware/index');

const route = require('express').Router();

route.post('/get-user-data' ,userData);
route.post('/update-user-data' , updateUser);
route.post('/delete-user-data' , deleteUser);
module.exports=route;
