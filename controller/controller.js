const db = require('../config/config.js');
const Customer = db.customers;
 
// Post a Customer
exports.create = (req, res) => {  
  Customer.create({  
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age
  }).then(customer => {    
    res.send(customer);
  });
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
  Customer.findAll().then(customers => {
    res.send(customers);
  });
};
 
// Find a Customer by Id
exports.find = (req, res) => {  
  const id=req.params.customerId;
  console.log(id)
  Customer.findOne({
    where: {
      id: id
    }
  }).then(customer => {
    console.log("done")
    res.send(customer);
  }).catch((err)=>{
    console.log("error", err)
    res.send("error while get by id")
  })
};
 
// Update a Customer
exports.update = (req, res) => {
  const id = req.params.customerId;
  Customer.update( {
    firstname: req.body.firstname, 
    lastname: req.body.lastname, 
    age: req.body.age 
  },{
    where: {id: id} 
  }).then(() => {
    res.status(200).send("updated successfully a customer with id = " + id);
  });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a customer with id = ' + id);
  });
};