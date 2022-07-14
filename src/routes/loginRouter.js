const express = require('express');
const loginController = require('../database/contollers/loginController');
const validateLogin = require('../database/middlewares/validateLogin');

const router = express.Router();

router.post('/', validateLogin, loginController.login);

module.exports = router;