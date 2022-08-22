const fs = require('fs');

const getTalkers = () => {
    try {
        const data = fs.readFileSync('./talker.json', { encoding: 'utf-8' });
        const talkers = JSON.parse(data);
        return talkers;
    } catch (err) {
        return [];
    }
};

module.exports = getTalkers;