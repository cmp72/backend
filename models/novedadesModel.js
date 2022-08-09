var pool= require('./bd'); //llamando datos de la bd

async function getNovedades(){
try {
    var query = 'select * from novedades';
    var rows= await pool.query (query);
    return rows;

} catch (error){
    console.log(error);
}

}

module.exports= {getNovedades}