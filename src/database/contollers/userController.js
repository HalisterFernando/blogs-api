const userService = require('../services/userService');
const jwtService = require('../services/jwtService');

const userController = {
    create: async (req, res) => {
        try {
            const { error } = await userService.create({ ...req.body });

            if (error) {
                return res.status(error.status).json({ message: error.message });
            }

            const token = jwtService(req.body.email);
            return res.status(201).json({ token });
        } catch (err) {
            console.log(err, 'Deu ruim');
            res.status(500).end();
        }
    },
};

module.exports = userController;