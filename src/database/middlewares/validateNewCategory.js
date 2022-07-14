const Joi = require('joi');

const validateNewCategory = (req, res, next) => {
    const { name } = req.body;
   
    const { error } = Joi.object({
        name: Joi.string().min(1),
    }).validate({ name });

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    return next();
};

module.exports = validateNewCategory;