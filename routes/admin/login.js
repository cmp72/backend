var express = require('express');
var router = express.Router();
var usuariosModel= require('./../../models/usuariosModel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.post('/', async (req, res, next) => {
  try{
    var usuario= req.body.usuario; //Captura el nombre del usuario
    var password= req.body.password; //Captura el password del usuario

    var data= await usuariosModel.getUser(usuario, password);
  
  if (data !=undefined){
    res.redirect('/admin/novedades');

  } else {
    res.render ('admin/login', {
      layout: 'admin/layout',
      error: true
    });
  }
} catch (error) {
console.log(error);
}
})

module.exports = router;
