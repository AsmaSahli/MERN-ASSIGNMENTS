const Country = require("../models/Country");

module.exports.findAllCountries = (req, res) => {
    Country.find()
        .then((allCountries) => res.status(200).json(allCountries))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.findOneCountry = (req, res) => {
    Country.findById({_id: req.params.id})
        .then((oneCountry) => res.status(200).json(oneCountry))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.createCountry = (req, res) => {
    Country.create(req.body)
        .then(newCountry =>{res.status(200).json(newCountry)})
        .catch((err) => {res.status(400).json(err)})
};

module.exports.updateCountry = (req, res) => {
    Country.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true,runValidators: true}
    )
    .then(updatedCountry=>res.status(200).json(updatedCountry))
    .catch((err) => {res.status(400).json(err)})
}

module.exports.deleteCountry = (req, res) => {
    Country.findByIdAndDelete({_id: req.params.id})
        .then((result)=> res.status(200).json(result))
        .catch((err) => {res.status(400).json(err)})
}

