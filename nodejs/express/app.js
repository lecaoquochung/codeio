var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var routes = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var contact = require('./routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/about', about);
app.use('/contact', contact);

app.get('/', function(req, res){
  res.render('index', {title: 'Welcome'});
});

app.post('/contact/send', function(req, res){
  console.log('Test');
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '@gmail',
      pass: ''
    }
  });

  var mailOptions = {
    from:'Le Hung <@gmail.com>',
    to: '',
    subject: 'Form submition',
    text: 'New notification ' +req.body.name+ 'Email: '+req.body.email+ 'Message: ' +req.body.message,
    html: '<p>You have received a message</p>'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if(error){
      console.log(error);
      res.redirect('/');
    } else {
      console.log('message sent');
      res.redirect('/');
    }
  });

});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// app.listen(3000);
// console.log('Running on port 3000');

// error handlers

// development error handler

// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
