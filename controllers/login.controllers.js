const generateToken = require('../helpers/getToken');

const loginController = (_req, res) => {
   // const { email, password } = req.body;
    const token = generateToken();
    // console.log(email, password, token);
    return res.status(200).json({ token });
};

module.exports = {
    loginController,
};