const { Category } = require('../database/models');

const categoryService = {
    create: async (name) => {
        const newCategory = await Category.create({ name });
        return newCategory;
    },
    list: async () => {
        const categories = await Category.findAll();
        return categories;
    },
    
};

module.exports = categoryService;
