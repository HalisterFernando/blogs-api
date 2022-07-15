require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
    const { authorization: token } = req.headers;

    if (!token) {       
        return res.status(401).json({ message: 'Token not found' });
    }
    
    try {
        const verifyToken = jwt.verify(token, JWT_SECRET);
        if (!verifyToken) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
        return next();
    } catch (err) {
        console.log(err, 'Deu ruim');
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};