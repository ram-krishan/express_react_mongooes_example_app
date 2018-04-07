const express = require('express');
const router = express.Router();


// book restfull request routes
router.get('/books', function (req, res) {
  res.send('Listing books here..')
});

router.post('/books', function (req, res) {
  res.send('I will create book here...')
});

router.get('/books/:id', function (req, res) {
  res.send('will show book here')
});

router.put('/books/:id', function (req, res) {
  res.send('update book here with put')
});

router.patch('/books/:id', function (req, res) {
  res.send('update book here with patch')
});

router.delete('/books/:id', function (req, res) {
  res.send('delete book here');
});




module.exports  = router;