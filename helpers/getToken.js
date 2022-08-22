const crypto = require('crypto');

const generateToken = () => {
    const token = crypto.randomBytes(16).toString('hex').slice(0, 16);
    return token;
};

module.exports = generateToken;