const express = require('express');
const loginController = require('../contollers/loginController');
const validateLogin = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', validateLogin, loginController.login);

module.exports = router;