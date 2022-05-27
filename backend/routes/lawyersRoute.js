const express = require('express');
const { getAllLawyers, createLawyer, updateLawyer, deleteLawyer } = require('../controllers/lawyersController');

const router = express.Router();

router.route('/lawyers').get(getAllLawyers);
router.route('/lawyer/new').post(createLawyer);
router.route('/lawyer/:id').put(updateLawyer).delete(deleteLawyer);

module.exports=router