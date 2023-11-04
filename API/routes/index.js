const router = require('express').Router();
const passController = require('../src/controllers/pass');
const middleware = require('../src/middlewares/auth');

router.use(middleware);

router.get('', passController.show );


module.exports = router;