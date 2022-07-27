const express = require('express');
const router = express.Router();

router.get('/dashbord', (reg,res) =>{
    res.render('home');
});

module.exports = router;