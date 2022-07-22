const express = require('express');
const { getAllCases, createCase, updateCase, deleteCase, getCaseDetails } = require('../controllers/caseController');
const { isAuthenticateduser } = require('../middleware/auth');

const router = express.Router();
router.route('/cases').get(getAllCases);
router.route('/case/new').post(isAuthenticateduser,createCase);
router.route('/case/:id').put(isAuthenticateduser,updateCase).delete(isAuthenticateduser,deleteCase).get(getCaseDetails);

module.exports=router