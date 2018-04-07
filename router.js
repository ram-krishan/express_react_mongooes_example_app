const express = require('express');
const router = express.Router();
const _ = require('lodash');
const User = require('./src/models/user');


const dummyUsers = [
  {
    id: 1,
    name: 'ram',
    age: 20,
  },
  {
    id: 2,
    name: 'sumit',
    age: 21,
  },
  {
    id: 3,
    name: 'vijay',
    age: 22,
  },
  {
    id: 4,
    name: 'ragh',
    age: 23,
  }
]

//User restfull request routes
router.get('/users', function (req, res) {
  res.send(dummyUsers)
});

// postman :: body raw  type: JSON/application format.
router.post('/users', function (req, res) {
  User.create(req.body).then(user => {
    res.send({ type: 'post', user: user });
  }).catch(error => {
    res.send({type: 'post', error: error });
  })
});

router.get('/users/:id', function (req, res) {
  res.send({ type: 'get', user: _.find(dummyUsers, { id: parseInt(req.params.id, 10) })});
});

router.put('/users/:id', function (req, res) {
  res.send({ type: 'put', id: req.query.id })
});

router.patch('/users/:id', function (req, res) {
  res.send({ type: 'pathc', id: req.query.id })
});

router.delete('/users/:id', function (req, res) {
  res.send({ type: 'delete', id: req.query.id });
});

module.exports  = router;