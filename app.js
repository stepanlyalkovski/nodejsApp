var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var blogRouter = require('./blogRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/blogs', blogRouter);

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});