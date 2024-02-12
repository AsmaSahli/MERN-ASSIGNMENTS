const AuthorController = require("../controllers/AuthorController.js");

module.exports= app =>{
    app.get('/api/Author',AuthorController.findAllAuthors);
    app.get('/api/Author/:id',AuthorController.findOneAuthor);
    app.post('/api/Author',AuthorController.createAuthor);
    app.patch('/api/Author/:id',AuthorController.updateAuthor);
    app.delete('/api/Author/:id',AuthorController.deleteAuthor);
    

}
