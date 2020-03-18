//Fazendo o require do express e executando o mesmo
var express = require('express');
var app = express();
app.use(express.static('./app/public'));
//Fazendo o set do EJS
app.set('view engine', 'ejs');

//Ajustando o diretório
app.set('views','./app/views');

//Body-Parser:
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//Fazendo o require do Consign, para manutenção de rotas
var consign = require('consign');
consign()
    .include("app/routes")
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);
    
//Exportando o app
module.exports = app;