const PlayerController = require("../controllers/PlayerController.js");

module.exports= app =>{
    app.get('/api/Player',PlayerController.findAllPlayers);
    app.get('/api/Player/:id',PlayerController.findOnePlayer);
    app.post('/api/Player',PlayerController.createPlayer);
    app.patch('/api/Player/:id',PlayerController.updatePlayer);
    app.delete('/api/Player/:id',PlayerController.deletePlayer);
    

}
