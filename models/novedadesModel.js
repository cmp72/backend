var pool= require('./bd'); //llamando datos de la bd

async function getNovedades(){

    var query = 'select * from novedades ';
    var rows= await pool.query (query);
    return rows;

} 
async function insertNovedad(obj){
    try{
        var query= 'insert into novedades set ? ';
        var rows= await pool.query(query, [obj]);
        return rows;
    } catch (error){
        console.log(error);
        throw error;

    }
}
//cierra insertNovedad

async function deleteNovedadesById(id){
    var query= 'delete from novedades where id = ?';
    var rows= await pool.query(query, [id]);
    return rows;
}
async function getNovedadById(id){

    var query ='select * fron novedades where id = ?';
    var rows=  pool.query(query, [id]);//saque el await
    return rows[0];
}
async function modificarNovedadById(obj, id){
    try{
        var query= 'update novedades set ? where id= ?';
        var rows =  pool.query (query, [obj ,id]);//saque el await
        return rows;
    } catch (error) {
        throw error;

    }
}

module.exports= {getNovedades, insertNovedad, deleteNovedadesById, getNovedadById, modificarNovedadById}