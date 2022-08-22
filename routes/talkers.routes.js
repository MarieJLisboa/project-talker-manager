const express = require('express');

const { 
    talkers, 
    talkersId, 
    addTalker, 
    updateTalker, 
    deleteTalkers,
    } = require('../controllers/talkers.controllers');

const name = require('../middlewares/talkers/name');
const age = require('../middlewares/talkers/age');
const talk = require('../middlewares/talkers/talk');
const token = require('../middlewares/talkers/token');
const search = require('../middlewares/talkers/search');

const router = express.Router();

// 1
router.get('/', talkers);

// 8
router.get('/search', token, search, talkers);

// 2
router.get('/:id', talkersId);

// 5
router.post('/', token, name, age, talk, addTalker);

// 6
router.put('/:id', token, name, age, talk, updateTalker);

// 7
router.delete('/:id', token, deleteTalkers);

module.exports = router;