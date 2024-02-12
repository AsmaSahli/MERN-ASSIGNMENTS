const NotesController = require("../controllers/NotesController.js");

module.exports= app =>{
    app.get('/api/Notes',NotesController.findAllNotes);
    app.get('/api/Notes/:id',NotesController.findOneNotes);
    app.post('/api/Notes',NotesController.createNotes);
    app.patch('/api/Notes/:id',NotesController.updateNotes);
    app.delete('/api/Notes/:id',NotesController.deleteNotes);
    

}
