const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');

// Route paths

router.post('/login', userController.Login);

router.post('/register', userController.Register);

module.exports = router;
