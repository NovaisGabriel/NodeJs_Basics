module.exports.formulario_inclusao_noticia = function(application,req,res){
    res.render("admin/form_add_noticia", {validacao: {},noticia:{}});
}

module.exports.noticias_salvar = function(application,req,res,errors){

    if(!errors.isEmpty()){
        var noticia = req.body;
        console.log(noticia);
        res.render("admin/form_add_noticia",{validacao: errors, noticia: noticia});
        return;
    }else{
    var noticia = req.body;
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
    res.redirect("/noticias");
    });
    };
}