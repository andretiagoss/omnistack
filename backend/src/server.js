// import da lib express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// importação das rotas do arquivo router.js
const routes = require('./routes');

// criação do servidor atribuindo na variavel constante server.
const server = express();

// conexão com o banco de dados mongoDB.
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-wtix8.mongodb.net/omnistackDB?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// configura o server para utilizar o Cors e tornar a API acessivel para outras aplicações.
server.use(cors());

// configura o server para utilizar/interpretar json nas requisições.
server.use(express.json());

// configura o server para utilizar as rotas do arquivo routes.js.
server.use(routes);

// criação do servidor ouvindo na porta 3333.
server.listen(3333);

