var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var blogRouter = require('./blogRouter');
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/blogs', blogRouter);
app.use(function(req, res) {
  res.render('index', {
      url: req.originalUrl, 
      method: req.method 
    });
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});