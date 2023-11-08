const express = require('express');
const router = express.Router();

//Import controllers
const loginController = require('../src/controllers/login');
const homeController = require('../src/controllers/home');
const registerController = require('../src/controllers/register');
router.use(express.json());

//import middleware
const middleware = require('../src/middlewares/auth');
const loginMiddleware = require('../src/middlewares/login');

//Login
router.get('', loginController.display);
router.post('', loginController.singIn);

// router.use('', middleware);

//Home
router.get('/home', homeController.display);

//Register
router.get('/register', registerController.display);

module.exports = router;