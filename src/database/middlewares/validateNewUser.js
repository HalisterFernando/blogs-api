const Joi = require('joi');

const validateNewUser = (req, res, next) => {
    const { displayName, email, password } = req.body;

    const { error } = Joi.object({
        displayName: Joi.string().min(8),
        email: Joi.string().email(),
        password: Joi.string().min(6),
    }).validate({ displayName, email, password });

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    return next();
};

module.exports = validateNewUser;