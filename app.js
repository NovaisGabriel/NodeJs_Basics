//Fazendo o require das configurações  do servidor
var app = require('./config/server');

// //Criando as Rotas para noticias e chamando
// var rotaNoticias = require('./app/routes/noticias')(app);

// //Criando as Rotas para Home e chamando
// var rotaHome = require('./app/routes/home')(app);

// //Criando as Rotas para Form_Inclusao_Noticia e chamando
// var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

//Exibindo mensagem de execução do servidor no console pela porta 3000
app.listen(3000, function(){
    console.log("Server está rodando...");
});