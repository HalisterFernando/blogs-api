const { User } = require('../models');

const loginService = {
    login: async (email, password) => {
        const result = await User.findOne({ where: { email, password } });

        if (!result) {
            return {
                error: {
                    status: 404,
                    message: 'Invalid fields',
                },
            };
        }

        return result;
    },
};

module.exports = loginService;