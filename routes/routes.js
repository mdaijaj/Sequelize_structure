module.exports = function(app) {
 
    const customers = require('../controller/controller.js');
 
    app.post('/api/customers', customers.create);
    app.get('/api/customers', customers.findAll);
    app.get('/api/customers/:customerId', customers.find);
    app.put('/api/customers/:customerId', customers.update);
    app.delete('/api/customers/:customerId', customers.delete);
}

