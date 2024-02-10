const CountryController = require("../controllers/CountryController.js");

module.exports= app =>{
    app.get('/api/Country',CountryController.findAllCountries);
    app.get('/api/Country/:id',CountryController.findOneCountry);
    app.post('/api/Country',CountryController.createCountry);
    app.patch('/api/Country/:id',CountryController.updateCountry);
    app.delete('/api/Country/:id',CountryController.deleteCountry);
    

}
