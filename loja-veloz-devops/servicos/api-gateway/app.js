const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('API Gateway da Loja Veloz rodando!');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`API Gateway ouvindo na porta ${port}`);
});