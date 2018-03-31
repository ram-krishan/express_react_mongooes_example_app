var express = require('express')
var app = express();


app.get('/', function (req, res) {
  res.send('Welcome to express app')
});


// book restfull request routes
app.get('/books', function (req, res) {
  res.send('Listing books here..')
});

app.post('/books', function (req, res) {
  res.send('I will create book here...')
});

app.get('/books/:id', function (req, res) {
  res.send('will show book here')
});

app.put('/books/:id', function (req, res) {
  res.send('update book here with put')
});

app.patch('/books/:id', function (req, res) {
  res.send('update book here with patch')
});

app.delete('/books/:id', function (req, res) {
  res.send('delete book here');
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))