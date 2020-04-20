const express = require('express'); // bliblioteca para rotas e views
const mongoose = require('mongoose'); // bliblioteca mongoose para conectar o mongo
const cors = require('cors');
const requireDir = require('require-dir');

// Iniciando o App
const app = express(); // instanciando a bliblioteca
app.use(express.json()); // Permite que a aplicação receba dados em formato Json
app.use(cors()); // Essa configuração permitiu qualquer dominio acessar a aplicação. Estudar mais esta parte. 

// Conectando o Banco 
mongoose.connect(
    "mongodb://192.168.99.100:27017/nodeapi", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
requireDir('./src/models');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001); // ouvindo a porta 3001 do navegador