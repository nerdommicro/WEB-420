/*============================================
; Title: app.js
; Author: Richard Krasso
; Date: 25 July 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates APIs
==============================================
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');
var app = express();

mongoose.connect('mongodb+srv://admin:admin@buwebdev-cluster-1-wbbs2.mongodb.net/api-gateway', {
  promiseLibrary: require('bluebird')
  }).then(()=>console.log('connection successful'))
  .catch((err)=>console.error(err));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiCatalog);
app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
