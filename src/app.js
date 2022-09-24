import express from 'express';
import { customPDF } from './pdf.js';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const data = await customPDF();
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
