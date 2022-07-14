const userService = require('../services/userService');
const jwtService = require('../services/jwtService');

const userController = {
    create: async (req, res) => {
            await userService.create({ ...req.body });          

            const token = jwtService(req.body.email);
            
            return res.status(201).json({ token });
    },
};

module.exports = userController;