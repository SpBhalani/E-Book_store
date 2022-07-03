const Cart = require('../model/cart')

const getCart = (req, res) => {
    Cart.findOne({ userId: req.body.userId })
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went Wrong");
            if (data) return res.status(200).json({ data });
        })

}

const addToCart = (req, res) => {
    Cart.findOne({ userId: req.body.userId })
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went Wrong");
            if (data) {
                const isItemAdded = data.cartItems.find(c => c.bookId == req.body.cartItems.bookId)
                if (isItemAdded) {
                    Cart.findOneAndUpdate({ userId: req.body.userId, "cartItems.bookId": req.body.cartItems.bookId }, {
                        "$set": {
                            "cartItems.$": {
                                ...req.body.cartItems,
                                Quantity: isItemAdded.Quantity + req.body.cartItems.Quantity,
                                price: isItemAdded.price + (req.body.cartItems.price * req.body.cartItems.Quantity)
                            }
                        }
                    })
                        .exec((error, cart_) => {
                            if (error) return res.status(400).send("Something Went Wrong");
                            if (cart_) return res.status(200).send("Cart Updated Successfully")
                        })
                }
                else {
                    Cart.findOneAndUpdate({ userId: req.body.userId }, {
                        "$push": {
                            "cartItems": req.body.cartItems
                        }
                    }).exec((error, cart_) => {
                        if (error) return res.status(400).send("Something Went Wrong");
                        if (cart_) return res.status(200).send("Cart Updated Successfully!")
                    })
                }

            }
            else {
                const _cart = new Cart({
                    userId: req.body.userId,
                    cartItems: [{
                        bookId: req.body.cartItems.bookId,
                        Quantity: req.body.cartItems.Quantity,
                        price: req.body.cartItems.price * req.body.cartItems.Quantity
                    }]
                })
                _cart.save((error, result) => {
                    if (error) return res.status(400).send("Something Went Wrong");
                    if (result) return res.status(200).send("Cart Added Successfully!!!")
                })
            }
        })
}

const removeItem = (req, res) => {
    Cart.findOne({ userId: req.body.userId })
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went Wrong");
            if (data) {
                const newCart = data.cartItems.filter(r => r.bookId != req.body.bookId)
                Cart.findOneAndUpdate({ userId: req.body.userId }, { cartItems: newCart }, { new: true })
                    .exec((error, cart_) => {
                        if (error) return res.status(400).send("Something Went Wrong");
                        if (cart_) return res.status(200).send("Cart removed Successfully!")
                    })
            }
            else{
                return res.status(400).send("Cart Not Available")
            }
        })
}

module.exports = { addToCart, getCart, removeItem }