const Product = require("../models/Product");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.status(200).json(allProducts))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.findOneProduct = (req, res) => {
    Product.findById({_id: req.params.id})
        .then((oneProduct) => res.status(200).json(oneProduct))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct =>{res.status(200).json(newProduct)})
        .catch((err) => {res.status(400).json(err)})
};

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true,runValidators: true}
    )
    .then(updatedProduct=>res.status(200).json(updatedProduct))
    .catch((err) => {res.status(400).json(err)})
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete({_id: req.params.id})
        .then((result)=> res.status(200).json(result))
        .catch((err) => {res.status(400).json(err)})
}

