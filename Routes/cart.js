const route = require('express').Router();
const { addToCart, getCart, removeItem } = require('../controller/cart');
const requireSignin = require('../middeleware/index');

route.post('/add-to-cart', addToCart)
route.post('/get-cart', getCart)
route.post('/remove-item-cart', removeItem)


module.exports = route