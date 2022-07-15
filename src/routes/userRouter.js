const express = require('express');
const userController = require('../contollers/userController');
const validateNewUser = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateNewUser, userController.create);
// router.use(validateToken);
router.get('/', validateToken, userController.list);
router.get('/:id', validateToken, userController.getById);

module.exports = router;