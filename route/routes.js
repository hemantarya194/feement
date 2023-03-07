const express = require('express');
const router=express.Router()

const {createData} = require('../controllers/add');
const {showData} = require('../controllers/fetch');
const {loginData} = require('../controllers/login');


router.route('/registration_form').post(createData)
router.route('/show').get(showData);
router.route('/Batches').post(showData);
router.route('/login').post(loginData);


module.exports= router