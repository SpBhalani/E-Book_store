const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cartItems: [
        {
            bookId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book'
            },
            Quantity: {
                type: Number,
                default: 1
            },
            price: Number
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model('Cart', cartSchema)