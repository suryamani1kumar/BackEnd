const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    msg: 'hello word',
  });
});

app.listen(3000);
