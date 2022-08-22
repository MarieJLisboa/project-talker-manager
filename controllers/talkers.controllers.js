const getTalkers = require('../services/getTalkers');
const getTalkerById = require('../services/getTalkerById');
const saveTalkers = require('../services/saveTalkers');

const talkers = (_req, res) => {
        const allTalkers = getTalkers();
        return res.status(200).json(allTalkers);
    };

const talkersId = (req, res) => {
    const { id } = req.params;
    const getById = getTalkerById(id);
    if (getById) {
        return res.status(200).json(getById);
    }
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
};

const addTalker = (req, res) => {
    const readTalkers = getTalkers();
    const { name, age, talk } = req.body;
    const id = readTalkers.length + 1;
    const newTalker = { id, name, age, talk };
    readTalkers.push(newTalker);
    saveTalkers(readTalkers).then(() => res.status(201).send(newTalker));
};

const updateTalker = (req, res) => {
    try {
    const id = Number(req.params.id);
    const { name, age, talk } = req.body;

    const speakers = getTalkers();
    const newTalker = { id, name, age, talk };
    const newTalkers = speakers.map((talker) => (talker.id === id ? newTalker : talker));
    saveTalkers(newTalkers);
    return res.status(200).send(newTalker);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const deleteTalkers = (req, res) => {
    const id = +req.params.id;
    const people = getTalkers();
    delete people[id - 1];
    saveTalkers(people);
    return res.status(204).send(people);
};

module.exports = { 
    talkers,
    talkersId,
    addTalker,
    updateTalker,
    deleteTalkers,
};
