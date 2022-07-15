const { User } = require('../database/models');

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
        const users = await User.findAll({ attributes: ['email', 'image', 'displayName'] });

        return users;
    },
    getById: async (id) => {
        const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
        if (!user) {
            const err = new Error('User does not exist');
            err.name = 'UserNotFound';
            throw err;
        }
        return user;
    },
};

module.exports = userService;