const Notes = require("../models/Notes");

module.exports.findAllNotes = (req, res) => {
    Notes.find()
        .then((allNotes) => res.status(200).json(allNotes))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.findOneNotes = (req, res) => {
    Notes.findById({_id: req.params.id})
        .then((oneNotes) => res.status(200).json(oneNotes))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.createNotes = (req, res) => {
    Notes.create(req.body)
        .then(newNotes =>{res.status(200).json(newNotes)})
        .catch((err) => {res.status(400).json(err)})
};

module.exports.updateNotes = (req, res) => {
    Notes.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true,runValidators: true}
    )
    .then(updatedNotes=>res.status(200).json(updatedNotes))
    .catch((err) => {res.status(400).json(err)})
}

module.exports.deleteNotes = (req, res) => {
    Notes.findByIdAndDelete({_id: req.params.id})
        .then((result)=> res.status(200).json(result))
        .catch((err) => {res.status(400).json(err)})
}

