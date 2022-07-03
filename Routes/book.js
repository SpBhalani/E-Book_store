const route = require('express').Router();
const { getBooks, addBook, deletebook, editBook } = require('../controller/book');
const requireSignin = require('../middeleware/index');

route.post('/get-book', getBooks)
route.post('/add-book', addBook)
route.post('/delete-book', deletebook)
route.post('/update-book', editBook)

module.exports = route