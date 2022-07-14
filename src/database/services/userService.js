const { User } = require('../models');

const userService = {
    create: async ({ displayName, email, password, image }) => {
        const isNewUser = await User.findOne({ where: { email } });

        if (isNewUser) {
         const err = new Error('User already registered');
         err.name = 'AlreadyExists';
         throw err;
        }
         
        const newUser = await User.create({ displayName, email, password, image });

        return newUser;
    },
    list: async () => {
        const users = await User.findAll();

        return users;
    },
};

module.exports = userService;