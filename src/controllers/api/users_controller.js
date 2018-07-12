const User = require('../../models/user').User;

class UsersController {

  static index (req, res) {
    User.find().then( users => {
      res.send(users);
    });
  }

  static update(req, res) {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).then(user => {
      res.send({ type: 'put', user: user });
    });
  }

  static create(req, res) {
    User.create(req.body).then(user => {
      res.send({ type: 'post', user: user });
    }).catch(error => {
      res.send({type: 'post', error: error });
    });
  }

  static destroy(req, res) {
    User.findByIdAndRemove(req.params.id).then(user => {
      res.send({ type: 'delete', user: user });
    })
  }

  static show(req, res) {
    User.findById(req.params.id).then( user => {
      res.send({ type: 'get1', user: user });
    });
  }
}

module.exports = UsersController;
