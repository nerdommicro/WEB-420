/*
======================================================
; Title:  nesbitt-assignment user.js
; Author: Richard Krasso
; Date:   7/11/2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates Mongoose Models
;=====================================================
*/
// Require statements
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema
let UserSchema = new Schema({
  username: {type: String, required: true },
  password: {type: String, required: true},
  email: {type: String, required: true}
});

// Export the model so its publicly available.
module.exports = mongoose.model('User', UserSchema);

