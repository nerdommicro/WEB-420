/*
======================================================
; Title:  api-catalog.js
; Author: Richard Krasso
; Date:   7/11/2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates Routes
;=====================================================
*/

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);
// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);
module.exports = router;