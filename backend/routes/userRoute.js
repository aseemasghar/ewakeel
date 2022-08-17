const express = require('express');
const { registeruser, loginuser, logOut, forgotPassword, getUserDetails,getMyCases, updatePassword, updateProfile, getAllUser, getSingleUser, giveFeedback, deleteUser, getAllUsers, getAllLawyers, getAllClients } = require('../controllers/userController');
const { isAuthenticateduser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route('/register').post(registeruser);
router.route('/login').post(loginuser);
router.route('/logout').get(logOut);
router.route('/password/forgot').post(forgotPassword);
router.route('/me').get(isAuthenticateduser,getUserDetails);
router.route('/my/cases').get(isAuthenticateduser,authorizeRoles("client"),getMyCases);
router.route('/user/feedback/:id').post(isAuthenticateduser,authorizeRoles("client"),giveFeedback);
router.route('/password/update').put(isAuthenticateduser,updatePassword);
router.route('/me/update').put(isAuthenticateduser,updateProfile);
router.route('/all/users').get(isAuthenticateduser,authorizeRoles("client"),getAllUser);
router.route('/user/:id').get(getSingleUser).delete(isAuthenticateduser,authorizeRoles('admin'),deleteUser);
router.route('/admin/user/:userid').get(getSingleUser).delete(deleteUser);
router.route('/admin/all/lawyers').get(getAllLawyers);
router.route('/admin/all/clients').get(getAllClients);


module.exports = router;