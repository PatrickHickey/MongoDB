const express = require('express');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');

const app = express();

const port = 3000;

app.use(bodyParser.json());

// Home
app.get('/', (req, res, next) => {
  res.send('Please use /api/products');
});

// Fetch All Products
app.get('/api/products', (req, res, next) => {
  res.send('List Products');
});

// Fetch Single Product
app.get('/api/products/:id', (req, res, next) => {
  res.send('Fetch Product '+req.params.id);
});

// Add Product
app.post('/api/products', (req, res, next) => {
  res.send('Add Products');
});

// Update Product
app.put('/api/products/:id', (req, res, next) => {
  res.send('Update Product '+req.params.id);
});

// Delete Product
app.delete('/api/products/:id', (req, res, next) => {
  res.send('Delete Product '+req.params.id);
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});
