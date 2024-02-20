const express = require('express');
const router = express.Router();

const testFunction = require('../Components/Test/test');
const adminLogin = require('../Components/AdminLogin/adminLogin')
const adminLogout = require('../Components/AdminLogout/adminLogout')


//___________Test api_________//

router.get('/test', (req, res) =>{
    testFunction(req, res);
})

router.post('/adminLogin', (req, res) =>{
    adminLogin(req, res);
})

router.get('/adminLogout', (req, res)=>{
    adminLogout(req, res);
})


module.exports = router;