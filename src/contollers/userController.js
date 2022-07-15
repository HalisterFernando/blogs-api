const userService = require('../services/userService');
const jwtService = require('../services/jwtService');

const userController = {
    create: async (req, res) => {
            await userService.create({ ...req.body });          

            const token = jwtService(req.body.email);            
            return res.status(201).json({ token });
    },
    list: async (_req, res) => {
        const users = await userService.list();        
        return res.status(200).json(users);
    },
    getById: async (req, res) => {
        const { id } = req.params;

        const user = await userService.getById(id);        
        return res.status(200).json(user);
    },
};

module.exports = userController;