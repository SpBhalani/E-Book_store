const Book = require("../model/book")

const getBooks = (req, res) => {
    Book.find({})
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went Wrong");
            if (data) return res.status(200).json({ data });
        })
}

const addBook = (req, res) => {
    Book.findOne({ name: req.body.name , sellerId:req.body.sellerId})
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went Wrong!!!");
            if (data) return res.status(409).send("Book Already Exist for this Seller");
            else {
                const _Book = new Book({
                    name: req.body.name,
                    price: req.body.price,
                    CategoryId: req.body.category,
                    Base64image: req.body.image,
                    Description: req.body.descreption,
                    sellerId: req.body.sellerId,
                    Quantity: 1,
                })
                _Book.save((error, result) => {
                    if (error) return res.status(400).send("Something Went Wrong!");
                    if (result) return res.status(200).send("Book Added Successfully")
                })
            }
        })
}

const editBook = (req, res) => {
    Book.findOneAndUpdate({ _id: req.body._id }, {
        name: req.body.name,
        price: req.body.price,
        CategoryId: req.body.category,
        Base64image: req.body.image,
        Description: req.body.descreption,
    }, { new: true })
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went wrong");
            if (data) return res.status(200).json({ data });
        })
}

const deletebook = (req, res) => {
    Book.deleteOne({ _id: req.body._id })
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went Wrong");
            if (data) return res.status(200).json({ data });
        })
}

module.exports = {
    getBooks,
    addBook,
    editBook,
    deletebook
}