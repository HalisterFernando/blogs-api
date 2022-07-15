const express = require('express');
const categoryController = require('../contollers/categoryController');
const validate = require('../middlewares/validate');

const router = express.Router();

router.use(validate.token);
router.post('/', validate.newCategory, categoryController.create);
router.get('/', categoryController.list);

module.exports = router;