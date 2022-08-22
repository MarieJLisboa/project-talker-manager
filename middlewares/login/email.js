const checkEmail = (req, res, next) => {
    const { email } = req.body;
    const regex = /.*@\w+.com/;

    if (typeof email !== 'string') {
        return res.status(400).send({ message: 'O campo "email" é obrigatório' });
    }

    if (!regex.test(email)) {
        return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
};

module.exports = checkEmail;