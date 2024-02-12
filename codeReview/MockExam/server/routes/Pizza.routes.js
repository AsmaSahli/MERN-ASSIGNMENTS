const PizzaController = require("../controllers/PizzaController.js");

module.exports= app =>{
    app.get('/api/Pizza',PizzaController.findAllPizzas);
    app.get('/api/Pizza/:id',PizzaController.findOnePizza);
    app.post('/api/Pizza',PizzaController.createPizza);
    app.patch('/api/Pizza/:id',PizzaController.updatePizza);
    app.delete('/api/Pizza/:id',PizzaController.deletePizza);
    

}
