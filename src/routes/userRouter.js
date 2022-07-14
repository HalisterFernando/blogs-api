const express = require('express');
const userController = require('../database/contollers/userController');
const validateNewUser = require('../database/middlewares/validateNewUser');

const router = express.Router();

router.post('/', validateNewUser, userController.create);

module.exports = router;