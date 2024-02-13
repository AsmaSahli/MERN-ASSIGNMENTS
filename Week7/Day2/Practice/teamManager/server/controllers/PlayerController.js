const Player = require("../models/Player");

module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then((allPlayers) => res.status(200).json(allPlayers))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.findOnePlayer = (req, res) => {
    Player.findById({_id: req.params.id})
        .then((onePlayer) => res.status(200).json(onePlayer))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer =>{res.status(200).json(newPlayer)})
        .catch((err) => {res.status(400).json(err)})
};

module.exports.updatePlayer = (req, res) => {
    Player.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true,runValidators: true}
    )
    .then(updatedPlayer=>res.status(200).json(updatedPlayer))
    .catch((err) => {res.status(400).json(err)})
}

module.exports.deletePlayer = (req, res) => {
    Player.findByIdAndDelete({_id: req.params.id})
        .then((result)=> res.status(200).json(result))
        .catch((err) => {res.status(400).json(err)})
}

