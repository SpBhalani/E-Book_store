const route = require('express').Router();
const { getCategory, addCategory, deleteCategory, updateCategory } = require('../controller/category');
const requireSignin = require('../middeleware/index');

route.post('/get-category', getCategory)
route.post('/add-category', addCategory)
route.post('/delete-category', deleteCategory)
route.post('/update-category', updateCategory)

module.exports = route