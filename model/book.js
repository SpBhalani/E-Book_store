const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    Description: String,
    Base64image: String,
    CategoryId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    Quantity: Number,
    isbnId: Number
}, { timestamps: true })

module.exports = mongoose.model("Book", bookSchema)