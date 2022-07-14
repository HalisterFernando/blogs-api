const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
    const { authorization: token } = req.headers;

    if (!token) {       
        return res.status(401).json({ message: 'Token not found' });
    }
    
    const { email } = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }

    return next();
};