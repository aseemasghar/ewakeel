const express = require('express');
const { registeruser, loginuser, logOut, forgotPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, deleteUser } = require('../controllers/userController');
const { isAuthenticateduser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route('/register').post(registeruser);
router.route('/login').post(loginuser);
router.route('/logout').get(logOut);
router.route('/password/forgot').post(forgotPassword);
router.route('/me').get(isAuthenticateduser,getUserDetails);
router.route('/password/update').put(isAuthenticateduser,updatePassword);
router.route('/me/update').put(isAuthenticateduser,updateProfile);
router.route('/admin/users').get(isAuthenticateduser,authorizeRoles('admin'),getAllUser);
router.route('/admin/user/:id').get(isAuthenticateduser,authorizeRoles('admin'),getSingleUser).delete(isAuthenticateduser,authorizeRoles('admin'),deleteUser);
module.exports = router;