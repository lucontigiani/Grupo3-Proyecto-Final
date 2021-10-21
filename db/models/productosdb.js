module.exports = function(sequelize, dataTypes){
    let alias = "Producto";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.STRING
        },
        precio:{
            type: dataTypes.INTEGER
        }
     
    }

    return Producto;
}