const { User } = require('../models');

const userService = {
    create: async ({ displayName, email, password, image }) => {
        const isNewUser = await User.findOne({ where: { email } });

        if (isNewUser) {
            return {
                error: {
                    status: 409,
                    message: 'User already registered',
                },
            };
        }
         
        const newUser = await User.create({ displayName, email, password, image });

        return newUser;
    },
};

module.exports = userService;