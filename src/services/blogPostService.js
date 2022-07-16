require('dotenv').config();
const jwt = require('jsonwebtoken');
const { BlogPost, User, PostCategory } = require('../database/models');

const { JWT_SECRET } = process.env;

const blogPostService = {
    create: async ({ title, content, categoryIds, token }) => {
        const { email } = jwt.verify(token, JWT_SECRET);
        const { dataValues: { id: userId } } = await User.findOne({ where: { email } });
        const newPost = await BlogPost.create({ title, content, categoryIds, userId });
        const { dataValues: { id: postId } } = newPost;
        await Promise
        .all(categoryIds.map((categoryId) => PostCategory.create({ postId, categoryId })));
        
        return newPost;
    },
};

module.exports = blogPostService;