'use strict';
require('dotenv').config();

// Import npm modules.
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');

// Initialize application.
var app = express();

// View engine setup.
app.engine('ejs', ejs.renderFile);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Set Development method.
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set Project structure.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

// Rendering routes using express router.
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
