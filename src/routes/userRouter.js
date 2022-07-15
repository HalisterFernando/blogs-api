const express = require('express');
const userController = require('../contollers/userController');
const validate = require('../middlewares/validate');

const router = express.Router();

router.post('/', validate.newUser, userController.create);
router.use(validate.token);
router.get('/', userController.list);
router.get('/:id', userController.getById);

module.exports = router;