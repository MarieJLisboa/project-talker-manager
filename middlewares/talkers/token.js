// const { getSavedTokens } = require('../helpers/tokenManager');

const validateToken = (req, res, next) => {
    const { authorization: token } = req.headers;

    if (!token) {
        return res.status(401).send({ message: 'Token não encontrado' });
    }

    if (token.length !== 16) {
        return res.status(401).send({ message: 'Token inválido' });
    }
/* 
    const savedTokens = getSavedTokens().split('\n');
    const verifyToken = savedTokens.some((item) => item === token);

    if (!verifyToken) {
        return res.status(401).send({ message: 'Token não encontrado' });
    } */
    next();
};

module.exports = validateToken;
