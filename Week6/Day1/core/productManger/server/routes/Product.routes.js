const ProductController = require("../controllers/ProductController.js");

module.exports= app =>{
    app.get('/api/Product',ProductController.findAllProducts);
    app.get('/api/Product/:id',ProductController.findOneProduct);
    app.post('/api/Product',ProductController.createProduct);
    app.patch('/api/Product/:id',ProductController.updateProduct);
    app.delete('/api/Product/:id',ProductController.deleteProduct);
    

}
