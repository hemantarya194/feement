const express = require('express');
const router = express.Router()

const { createData } = require('../controllers/add');
const { showData } = require('../controllers/fetch');
const { singleData, updateData } = require('../controllers/getSingleData');
const { loginData } = require('../controllers/login');
const { update } = require('../controllers/update');

router.route('/registration_form').post(createData)
router.route('/Batches/:name').get(showData);
router.route('/login').post(loginData);
router.route('/getuser/:id').get(singleData);
router.route('/update/:id').patch(updateData);
router.route('/show').get(showData);
// router.route('/profile').get(showData);
// router.route('/Batches').post(showData);




module.exports = router