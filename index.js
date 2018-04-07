var express = require('express')
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var paramsLogger =  function (req, res, next) {
  console.log('========================================');
  console.log('params', req.params);
  console.log('query', req.query);
  console.log('body', req.body);
  debugger
  next()
};

app.use(paramsLogger);

app.get('/', function (req, res) {
  res.send('<form method="post" action="/books"><input type="text" name="book_name"/><input type="submit">submit</input></form>');
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
