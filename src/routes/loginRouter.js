const express = require('express');
const loginController = require('../contollers/loginController');
const validate = require('../middlewares/validate');

const router = express.Router();

router.post('/', validate.login, loginController.login);

module.exports = router;