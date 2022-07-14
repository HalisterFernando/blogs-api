const express = require('express');
const userController = require('../database/contollers/userController');
const validateNewUser = require('../database/middlewares/validateNewUser');
const validateToken = require('../database/middlewares/validateToken');

const router = express.Router();

router.post('/', validateNewUser, userController.create);
router.use(validateToken);
router.get('/', userController.list);

module.exports = router;