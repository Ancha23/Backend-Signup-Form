const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/database'); // Ajuste o caminho conforme a estrutura do projeto
const userRoutes = require('./routes/entreces-route');

dotenv.config(); // Carrega variáveis de ambiente

const app = express();
const port = process.env.PORT || 3000;

console.log('MongoDB URI:', process.env.MONGO_URI); // Verifique o valor da variável

// Conectar ao banco de dados
connectDB(); // Use a função connectDB para conectar ao MongoDB

// Middleware para interpretar JSON
app.use(express.json()); 

// Definir rotas
app.use('/api/users', userRoutes); // Ajuste o caminho para suas rotas de usuário

// Iniciar o servidor
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
