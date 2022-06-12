const express = require('express');
const { registeruser, loginuser, logOut } = require('../controllers/userController');
const router = express.Router();

router.route('/register').post(registeruser);
router.route('/login').post(loginuser);
router.route('/logout').get(logOut);

module.exports = router;