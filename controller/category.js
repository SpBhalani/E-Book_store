const Category = require('../model/category')

const getCategory = (req, res) => {
    Category.find({})
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went Wrong");
            if (data) return res.status(200).json({ data });
        })
}
 
const addCategory = (req, res) => {
    Category.findOne({ name: req.body.name })
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went Wrong");
            if (data) return res.status(409).send("Category Already Exist");
            else {
                const _category = new Category({ name: req.body.name })
                _category.save((error, result) => {
                    if (error) return res.status(400).send("Something Went Wrong");
                    if (result) return res.status(200).send("Category Added Successfully")
                })
            }
        })
}

const updateCategory = (req, res) => {
    Category.findByIdAndUpdate({ _id: req.body._id }, { name: req.body.name }, { new: true })
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went wrong");
            if (data) return res.status(200).json({ data });
        })
}

const deleteCategory = (req, res) => {
    Category.deleteOne({ _id: req.body._id })
        .exec((error, data) => {
            if (error) return res.status(400).send("Something Went Wrong");
            if (data) return res.status(200).json({ data });
        })
}

module.exports = {getCategory ,addCategory,updateCategory,deleteCategory} 