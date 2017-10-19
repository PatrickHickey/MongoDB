const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Init app
const app = express();

// Port
const port = 3000;

// Client folder
app.use(express.static(__dirname+'/client'));

// Body Parser
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Please use /api/customers or /api/invoices');
});

// Route files
const customers = require('./routes/customers');
const invoices = require('./routes/invoices');

// Paths
app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

app.listen(port, () => {
  console.log('Server started on port '+port);
});
