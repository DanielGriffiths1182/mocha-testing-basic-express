const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'page not found'
  });
});

app.get('/users', (req, res) => {
  res.send([
    { name: "Daniel", age: 25 },
    { name: "Ben", age: 1 }
  ]);
});

app.listen(3000, () => console.log('on http://localhost:3000'))

module.exports.app = app;
