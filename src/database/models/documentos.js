module.exports = (sequelize, DataTypes) => {

  // Definición del modelo 'Documento'
const Documento = sequelize.define('Documento', {
    tipoDocumento: DataTypes.STRING,
  }, {});
  
  // Definición de asociaciones entre el modelo 'Documento' y 'clientes'
  Documento.associate = function(models) {
    Documento.hasMany(models.Client, {  
      foreignKey: 'tipoIdentificacion',
      as: 'clients'
    });
  };
 
  return Documento;
};
