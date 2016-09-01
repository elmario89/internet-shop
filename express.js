var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/api/telephone', function (req, res) {
  res.json([{id:1}, {id:2}, {id:3}]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});