const errors = {
    UserNotFound: {
        status: 404,        
    },
    InvalidFields: {
        status: 400,
    },
    AlreadyExists: {
        status: 409,
    },
    MissingFields: {
        status: 400,
    },
    TokenNotFound: {
        status: 401,
    },
    InvalidNewUser: {
        status: 400,
    },
    InvalidNewCategory: {
        status: 400,
    },
};

module.exports = (err, _req, res, _next) => {
    const { name, message } = err;
    if (name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
  return res.status(errors[name].status).json({ message });
};