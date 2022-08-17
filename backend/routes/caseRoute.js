const express = require('express');
const { getAllCases, createCase, updateCase, deleteCase, getCaseDetails,bidOnCase,deleteadminCase } = require('../controllers/caseController');
const { isAuthenticateduser } = require('../middleware/auth');

const router = express.Router();
router.route('/cases').get(getAllCases);
router.route('/case/new').post(isAuthenticateduser,createCase);
router.route('/case/:id').put(isAuthenticateduser,updateCase).delete(isAuthenticateduser,deleteCase).get(getCaseDetails);
router.route('/case/bid/:id').post(isAuthenticateduser,bidOnCase);
router.route('/admin/case/:id/:userid').delete(deleteadminCase);

module.exports=router