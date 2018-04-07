const express = require('express')
const bodyParser = require('body-parser')
const mongoose  = require('mongoose');

const router = require('./router');

var app = express();


mongoose.connect('mongodb://mongo:mongo@ds163613.mlab.com:63613/express-db');
mongoose.Promise = global.Promise;

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
