module.exports = (sequelize, DataTypes) => {
  const Documento = sequelize.define('Documento', {
    tipoDocumento: DataTypes.STRING,
  }, {});

  Documento.associate = function(models) {
    Documento.hasMany(models.Client, {  
      foreignKey: 'tipoIdentificacion',
      as: 'clients'
    });
  };
 
  return Documento;
};
