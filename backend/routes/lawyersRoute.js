const express = require('express');
const { getAllLawyers, createLawyer } = require('../controllers/lawyersController');

const router = express.Router();

router.route('/lawyers').get(getAllLawyers)
router.route('/lawyer/new').post(createLawyer)

module.exports=router