const express = require('express');
const categoryController = require('../contollers/categoryController');
const validate = require('../middlewares/validate');

const router = express.Router();

router.use(validate.token);
router.post('/', validate.newCategory, categoryController.create);

module.exports = router;