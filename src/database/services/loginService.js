const { User } = require('../models');

const loginService = {
    login: async (email, password) => {
        const result = await User.findOne({ where: { email, password } });

        if (!result) {
            const err = new Error('Invalid fields');
            err.name = 'InvalidFields';
            throw err;           
        }

        return result;
    },
};

module.exports = loginService;