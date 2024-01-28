const jokeController =require("../controllers/jokeController")

module.exports = app=>{
    app.get("/api/jokes",jokeController.findAll),
    app.post("/api/jokes",jokeController.create),
    app.get("/api/jokes/:_id", jokeController.getJokeById),
    app.put("/api/jokes/:_id", jokeController.updateJoke),
    app.delete("/api/jokes/:_id", jokeController.deleteJoke)

}