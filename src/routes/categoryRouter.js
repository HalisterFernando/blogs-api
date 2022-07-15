const express = require('express');
const categoryController = require('../contollers/categoryController');
const validateNewCategory = require('../middlewares/validateNewCategory');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.use(validateToken);
router.post('/', validateNewCategory, categoryController.create);

module.exports = router;