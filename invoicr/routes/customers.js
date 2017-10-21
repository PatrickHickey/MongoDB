const express = require('express');
const router = express.Router();

Customer = require('../models/customer');

// Get all customers
router.get('/', (req, res) => {
  Customer.getCustomers((err, customers) => {
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(customers);
  });
});

// Get a single customers
router.get('/:id', (req, res) => {
  Customer.getCustomer(req.params.id, (err, customer) => {
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(customer);
  });
});

// Add customer
router.post('/', (req, res) => {
  const customer = req.body;
  Customer.addCustomer(customer, (err, customer) => {
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(customer);
  });
});

// Update customer
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const customer = req.body;
  Customer.updateCustomer(id, customer, {}, (err, customer) => {
    if(err){
      res.send(err);
    }
    res.json(customer);
  });
});

// Get all customers
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Customer.removeCustomer(id, (err, customer) => {
    if(err){
      res.send(err);
    }
    res.json(customer);
  });
});

module.exports = router;
