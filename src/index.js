const express = require('express');
const app = express();
const port = 3000;

// Configura o middleware
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
  res.send('eMPREGO');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
