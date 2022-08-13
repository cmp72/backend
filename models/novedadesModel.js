var pool= require('./bd'); //llamando datos de la bd

async function getNovedades(){

    var query = 'select * from novedades ';
    var rows= await pool.query (query);
    return rows;

} 

module.exports= {getNovedades}