const express = require('express');
const router = express.Router();

// Get all invoices
router.get('/', (req, res) => {
  res.send('Invoices');
});

module.exports = router;
