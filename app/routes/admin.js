module.exports = function(application){

    const { check, oneOf, validationResult } = require('express-validator');

    application.get('/formulario_inclusao_noticia',function(req,res){
        application.app.controllers.admin.formulario_inclusao_noticia(application,req,res);
    });

    application.post('/noticias/salvar',
    oneOf([check('titulo','Título é obrigatório!').notEmpty(),
        check('resumo','Resumo é obrigatório!').notEmpty(),
        check('resumo','Resumo deve conter entre 3 e 100 caracteres').isLength({ min: 3, max:100 }),
        check('autor','Autor é obrigatório!').notEmpty(),
        check('data','Data é obrigatório!').notEmpty(),
        check('noticia','Notícia é obrigatório!').notEmpty()]), (req,res)=>{
        
        const errors = validationResult(req);
        application.app.controllers.admin.noticias_salvar(application,req,res,errors);
    });
};