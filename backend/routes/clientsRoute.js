const express = require('express');
const { registerClient, loginClient, logOut } = require('../controllers/clientsController');
const router = express.Router();

router.route('/register').post(registerClient);
router.route('/login').post(loginClient);
router.route('/logout').get(logOut);

module.exports = router;