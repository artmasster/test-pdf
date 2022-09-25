const express = require('express');
const customPDF = require('./pdf');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const data = await customPDF();
  res
    .status(200)
    .send(
      `<body style="margin: 0;"><iframe src="${data}" style="width: 100vw; height: 100vh; border: none;" /></body>`
    );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
