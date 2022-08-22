const getTalkers = require('./getTalkers');

const getTalkerById = (id) => {
    const data = getTalkers();
    return data.find(({ id: talID }) => talID === Number(id));
};

module.exports = getTalkerById;