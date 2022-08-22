const fs = require('fs');

const saveTalkers = async (talkers) => {
    fs.writeFileSync('./talker.json', JSON.stringify(talkers));
};

module.exports = saveTalkers;