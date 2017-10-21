const express = require('express');
const router = express.Router();

Invoice = require('../models/invoice');

// Get all invoices
router.get('/', (req, res) => {
  Invoice.getInvoices((err, invoices) => {
    if(err){
      res.send(err);
    }
    res.json(invoices);
  });
});

// Get all customer invoices
router.get('/customer/:customer_id', (req, res) => {
  Invoice.getCustomerInvoices(req.params.customer_id, (err, invoices) => {
    if(err){
      res.send(err);
    }
    res.json(invoices);
  });
});

// Add invoice
router.post('/', (req, res) => {
  const invoice = req.body;
  Invoice.addInvoice(invoice, (err, invoice) => {
    if(err){
      res.send(err);
    }
    res.json(invoice);
  });
});

// Update invoice
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const invoice = req.body;
  Invoice.updateInvoice(id, invoice, {}, (err, invoice) => {
    if(err){
      res.send(err);
    }
    res.json(invoice);
  });
});

// Delete invoice
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Invoice.removeInvoice(id, (err, invoice) => {
    if(err){
      res.send(err);
    }
    res.json(invoice);
  });
});

module.exports = router;
