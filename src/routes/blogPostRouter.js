const express = require('express');
const blogPostController = require('../contollers/blogPostController');
const validate = require('../middlewares/validate');

const router = express.Router();

router.use(validate.token);
router.post('/', validate.newPost, blogPostController.create);

module.exports = router;