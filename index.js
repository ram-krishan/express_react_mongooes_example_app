const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var paramsLogger =  function (req, res, next) {
  console.log('========================================');
  console.log('params', req.params);
  console.log('query', req.query);
  console.log('body', req.body);
  next()
};

app.use(paramsLogger);

app.get('/', function (req, res) {
  res.send('<form method="post" action="/books"><input type="text" name="book_name"/><input type="submit">submit</input></form>');
});

app.use('/api',  router);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
