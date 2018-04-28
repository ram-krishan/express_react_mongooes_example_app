const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport');
const request = require('request');
const { Strategy: LocalStrategy } = require('passport-local');

const mongoose  = require('mongoose');
const router = require('./router');
const User = require('./src/models/user');

var app = express();


mongoose.connect('mongodb://mongo:mongo@ds163613.mlab.com:63613/express-db');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  User.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { msg: `Email ${email} not found.` });
    }
    user.comparePassword(password, (err, isMatch) => {
      console.log("error", err)
      console.log("isMatch", isMatch)
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { msg: 'Invalid email or password.' });
    });
  });
}));

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

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send({ user: req.user, message: "you are successfully logged in" });
  });

app.listen(3000, () => console.log('Example app listening on port 3000!'))
