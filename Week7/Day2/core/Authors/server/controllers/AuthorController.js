const Author = require("../models/Author");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => res.status(200).json(allAuthors))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.findOneAuthor = (req, res) => {
    Author.findById({_id: req.params.id})
        .then((oneAuthor) => res.status(200).json(oneAuthor))
        .catch((err) => {res.status(400).json(err)})
};

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor =>{res.status(200).json(newAuthor)})
        .catch((err) => {res.status(400).json(err)})
};

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            if (!updatedAuthor) {
                return res.status(404).json({ message: "We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?" });
            }
            res.status(200).json(updatedAuthor);
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete({_id: req.params.id})
        .then((result)=> res.status(200).json(result))
        .catch((err) => {res.status(400).json(err)})
}

