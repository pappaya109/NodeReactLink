const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=>{
    console.log('Main Router')
    // res.sendFile(__dirname + )
})

module.exports = router;
