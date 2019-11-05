const express = require('express');
const app = express();
const task = require('../task_container.json');

app.get('/api/task', (req, res) => res.json(task));

app.listen(8000, () => {
  console.log('run');
});