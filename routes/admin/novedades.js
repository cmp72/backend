var express = require('express');
var router = express.Router();
var novedadesModel= require('./../../models/novedadesModel')//quizas quitar ./


/* GET home page. */
router.get('/', async function(req, res, next) {

  var novedades= await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});

router.get ('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })//Cierra render

})//Cierra get

router.post ('/agregar', async(req, res, next) =>{
  try{
    if (req.body.titulo !="" && req.body.subtitulo !="" && req.body.cuerpo !=""){
      await novedadesModel.insertNovedad(req.body);
      res.redirect('/admin/novedades')
    }else{
      res.render('admin/agregar',{
        layout: 'admin/layout',
        error:true,
        message: 'Todos los campos son requeridos'
      })
    }
  }catch(error){
    console.log(error)
    res.render('admin/agregar',{
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
})
//Para eliminar una novedad
router.get('/eliminar/:id', async (req, res, next) => {
  var id= req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades');
})//Cierra get de eliminar

module.exports= router;
