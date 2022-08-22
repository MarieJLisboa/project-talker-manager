const express = require('express');

const router = express.Router();

const email = require('../middlewares/login/email');
const password = require('../middlewares/login/password');

const { loginController } = require('../controllers/login.controllers');

router.post('/', email, password, loginController);

module.exports = router;