/*
======================================================
; Title:  index.js
; Author: Richard Krasso
; Date:   7/11/2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates Routes
;=====================================================
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
