const loginService = require('../services/loginService');
const jwtService = require('../services/jwtService');

const loginController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        
             await loginService.login(email, password);    
            
            const token = jwtService(email);    
            return res.status(200).json({ token });
    },
};

module.exports = loginController;