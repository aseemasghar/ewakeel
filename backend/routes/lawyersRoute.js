const express = require('express');
const { getAllLawyers, createLawyer, updateLawyer, deleteLawyer, getLawyerDetails } = require('../controllers/lawyersController');
const { isAuthenticateduser,authorizeRoles } = require('../middleware/auth');

const router = express.Router();
router.route('/lawyers').get(getAllLawyers);
router.route('/lawyer/new').post(isAuthenticateduser,authorizeRoles('admin'),createLawyer);
router.route('/lawyer/:id').put(isAuthenticateduser,authorizeRoles('admin'),updateLawyer).delete(isAuthenticateduser,authorizeRoles('admin'),deleteLawyer).get(getLawyerDetails);

module.exports=router