const Pizza = require("../models/Pizza");

module.exports.findAllPizzas = (req, res) => {
    Pizza.find()
        .then((allPizzas) => res.status(200).json(allPizzas))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.findOnePizza = (req, res) => {
    Pizza.findById({_id: req.params.id})
        .then((onePizza) => res.status(200).json(onePizza))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.createPizza = (req, res) => {
    Pizza.create(req.body)
        .then(newPizza =>{res.status(200).json(newPizza)})
        .catch((err) => {res.status(400).json(err)})
};

module.exports.updatePizza = (req, res) => {
    Pizza.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true,runValidators: true}
    )
    .then(updatedPizza=>res.status(200).json(updatedPizza))
    .catch((err) => {res.status(400).json(err)})
}

module.exports.deletePizza = (req, res) => {
    Pizza.findByIdAndDelete({_id: req.params.id})
        .then((result)=> res.status(200).json(result))
        .catch((err) => {res.status(400).json(err)})
}

