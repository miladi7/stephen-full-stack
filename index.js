
const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send({success: true});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);