const blogPostService = require('../services/blogPostService');

const blogPostController = {
    create: async (req, res) => {       
        const { authorization: token } = req.headers;
        const newPost = await blogPostService.create({ ...req.body, token });
        const { dataValues: 
            { id, title, content, userId, updatedAt: updated, createdAt: published } } = newPost;
        return res.status(201)
        .json({ id, title, content, userId, updated, published });
    },
};

module.exports = blogPostController;