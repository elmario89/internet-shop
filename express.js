var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/api/telephone', function (req, res) {
  var telephonesArray = [{
    id: 1,
    telephone: "+7 999 99 99",
    fullname: "Anakleto Anakletovich"
  },{
    id: 2,
    telephone: "+7 888 88 88",
    fullname: "Mikhail Smirnov"
  },{
    id: 3,
    telephone: "+7 777 77 77",
    fullname: "Andreas Rios"
  }]
  res.json(telephonesArray);
});

app.get('/api/telephone/:id', function (req, res) {
  var id = req.params.id;
  id = id - 1;
  var phones = [{
    id: 1,
    telephone: "+7 999 99 99",
    fullname: "Anakleto Anakletovich"
  },{
    id: 2,
    telephone: "+7 888 88 88",
    fullname: "Mikhail Smirnov"
  },{
    id: 3,
    telephone: "+7 777 77 77",
    fullname: "Andreas Rios"
  }]
  res.json(phones[id]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});