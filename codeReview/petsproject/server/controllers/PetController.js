const Pet = require("../models/Pet");

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then((allPets) => res.json(allPets))
        .catch((err) => console.log(err));
};

module.exports.findOnePet = (req, res) => {
    Pet.findById({_id: req.params.id})
        .then((onePet) => res.json(onePet))
        .catch((err) => console.log(err));
};

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet =>{res.status(200).json(newPet)})
        .catch((err) => {res.status(400).json(err)})
};

module.exports.updatePet = (req, res) => {
    Pet.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true,runValidators: true}
    )
    .then(updatedPet=>res.json(updatedPet))
    .catch((err) => res.json(err));
}

module.exports.deletePet = (req, res) => {
    Pet.findByIdAndDelete({_id: req.params.id})
        .then((result)=> res.json(result))
        .catch((err) => console.log(err));
}

