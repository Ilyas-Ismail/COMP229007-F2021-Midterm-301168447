// File name: app.js
// Author: JViniX
// Date: 10/25/2021 (October 25th, 2021)

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
