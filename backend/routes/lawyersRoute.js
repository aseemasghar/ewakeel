const express = require('express');
const { getAllLawyers, createLawyer, updateLawyer, deleteLawyer, getLawyerDetails } = require('../controllers/lawyersController');
const { isAuthenticatedClient } = require('../middleware/auth');

const router = express.Router();

router.route('/lawyers').get(isAuthenticatedClient, getAllLawyers);
router.route('/lawyer/new').post(createLawyer);
router.route('/lawyer/:id').put(updateLawyer).delete(deleteLawyer).get(getLawyerDetails);

module.exports=router