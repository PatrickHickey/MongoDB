const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Mongoose connect
mongoose.connect('mongodb://localhost/invoicr');
const db = mongoose.connection;

// Init app
const app = express();

// Port
const port = 3000;

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
