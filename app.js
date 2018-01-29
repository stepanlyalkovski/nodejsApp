var express = require('express');
var bodyParser = require('body-parser');
var blogRouter = require('./blogRouter');
var fs = require( 'fs' );
var path = require('path');
var winston = require('winston');
var path = require('path');
var port = 3000;  

run();

function run() {
  var app = configureApp();

  app.listen(port, function() {
    console.log('App listening on port ' + port + "!");
  });
}

function configureApp() {
  var app = express();
  var logger = createLogger();
  
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  app.use(function(req, res, next) {
    var requestDate = new Date(Date.now()).toLocaleString();
    logger.info('request recieved', { url: req.originalUrl, method: req.method, date: requestDate });
  
    next();
  });
  app.use('/blogs', blogRouter);
  app.use(function(req, res) {
    res.render('index', {
        url: req.originalUrl, 
        method: req.method 
      });
  });

  return app;
}

function createLogger() {
  var logDirectory = 'logs';
  if (!fs.existsSync(logDirectory)) {
      fs.mkdirSync(logDirectory);
  }
  
  var logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.File({ filename: path.join(logDirectory, 'requestInfo.log') })
    ]
  });

  return logger;
}