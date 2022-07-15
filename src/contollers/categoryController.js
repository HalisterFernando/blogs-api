const categoryService = require('../services/categoryService');

const categoryController = {
    create: async (req, res) => {
        const { name } = req.body;
        const newCategory = await categoryService.create(name);
        return res.status(201).json(newCategory);
    },
    list: async (_req, res) => {
        const categories = await categoryService.list();
        return res.status(200).json(categories); 
    },
    
};

module.exports = categoryController;