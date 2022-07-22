const express = require('express');
const { getAllCases, createCase, updateCase, deleteCase, getCaseDetails } = require('../controllers/caseController');
const { isAuthenticateduser,authorizeRoles } = require('../middleware/auth');

const router = express.Router();
router.route('/cases').get(getAllCases);
router.route('/case/new').post(isAuthenticateduser,authorizeRoles('client'),createCase);
router.route('/case/:id').put(isAuthenticateduser,authorizeRoles('client'),updateCase).delete(isAuthenticateduser,authorizeRoles('client'),deleteCase).get(getCaseDetails);

module.exports=router