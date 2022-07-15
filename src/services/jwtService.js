require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const createToken = (email) => {
   const payload = {
        email,
    };
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
};

module.exports = createToken;