const loginService = require('../services/loginService');
const jwtService = require('../services/jwtService');

const loginController = {
    login: async (req, res) => {
        const { email, password } = req.body;
      
        try {
            const { error } = await loginService.login(email, password);    
            
            if (error) {
                return res.status(error.status).json({ message: error.message });
            }    
            
            const token = jwtService(email);    
            return res.status(200).json({ token });
        } catch (err) {
            console.log(err, 'Deu ruim!');
            res.status(500).end();
        }
    },
};

module.exports = loginController;