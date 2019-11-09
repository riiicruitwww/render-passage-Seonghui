const express = require('express');
const app = express();
var cors = require('cors');
const task = require('./data/task_container.json');

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/task', (req, res) => res.json(task));

app.listen(8000, () => {
  console.log('run');
});