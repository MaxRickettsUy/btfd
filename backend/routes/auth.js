require('dotenv').config()
const router = require('express').Router();
const authController = require('../controllers/auth')

router.post('/login', authController.login);

router.post('/register', authController.register);

router.get('/welcome', authController.welcome);

module.exports = router;