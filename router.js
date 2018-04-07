const express = require('express');
const router = express.Router();
const UsersController = require('./src/controllers/api/users_controller');

router.get('/users', UsersController.index);
router.post('/users', UsersController.create);
router.get('/users/:id', UsersController.show);
router.put('/users/:id', UsersController.update);
router.patch('/users/:id', UsersController.update);
router.delete('/users/:id', UsersController.destroy);

module.exports  = router;