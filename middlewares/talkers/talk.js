const validatewatchedAt = (watchedAt) => {
    if (!watchedAt) {
        return {
            result: false, 
            message: 'O campo "watchedAt" é obrigatório',
        };
    }
    
    const regex = /\w{2}[/]\w{2}[/]\w{4}/;
    if (!regex.test(watchedAt)) {
        return {
            result: false, 
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        };
    }
    return {
        result: true,
        message: 'Okay',
    };
};

const validaRate = (rate) => {
    if (rate === undefined) {
        return {
            result: false, 
            message: 'O campo "rate" é obrigatório',
        };
    }
    if (rate > 5 || rate < 1) {
        return {
            result: false, 
            message: 'O campo "rate" deve ser um inteiro de 1 à 5',
        };
    }
    return {
        result: true,
        message: 'Okay',
    };
};

const validateTalk = (req, res, next) => {
    const { talk } = req.body;
    if (!talk) {
        return res.status(400).send({ message: 'O campo "talk" é obrigatório' });
    }

    const { watchedAt, rate } = talk;
    const watchedState = validatewatchedAt(watchedAt);
    const rated = validaRate(rate);

    if (!watchedState.result) {
        return res.status(400).send({ message: watchedState.message });
    }
    
    if (!rated.result) {
        return res.status(400).send({ message: rated.message });
    }
    next();
};

module.exports = validateTalk;