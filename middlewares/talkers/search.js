const getTalkrs = require('../../services/getTalkers');

const searchTalkers = (req, res, next) => {
    try {
        const { q } = req.query;
        const talkrs = getTalkrs();
        if (!q || q === undefined) next();
        const result = talkrs.filter(({ name }) => {
            const lowQ = q.toLowerCase();
            const lowName = name.toLowerCase();
            return lowName.includes(lowQ);
        });
        if (!result) return res.status(200).send([]);
        return res.status(200).send(result);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

module.exports = searchTalkers;