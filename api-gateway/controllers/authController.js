/*
======================================================
; Title:  nesbitt-assignment authController.js
; Author: Richard Krasso
; Date:   7/11/2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates Controllers
;=====================================================
*/


var User = require('../models/user');
// Register a new user on POST
exports.user_register = function(req, res) {
 res.send('NOT IMPLEMENTED: User registration POST');
};
// Verify token on GET
exports.user_token = function(req, res) {
 res.send('NOT IMPLEMENTED: User token lookup GET');
};