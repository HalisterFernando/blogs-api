const express = require('express');
const categoryController = require('../database/contollers/categoryController');
const validateNewCategory = require('../database/middlewares/validateNewCategory');
const validateToken = require('../database/middlewares/validateToken');

const router = express.Router();

router.use(validateToken);
router.post('/', validateNewCategory, categoryController.create);

module.exports = router;