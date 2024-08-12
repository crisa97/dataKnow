module.exports = (sequelize, DataTypes) => {
  
  // Definición del modelo 'Client' en Sequelize
  const Client = sequelize.define('Client', {
    nombreCliente: DataTypes.STRING,
    numeroIdentificacion: DataTypes.STRING,
    observaciones: DataTypes.TEXT,
  }, {});
  
  // Definición de asociaciones entre el modelo 'Client' y otros modelos 
  Client.associate = function(models) {
    Client.hasMany(models.Factura, {
      foreignKey: 'idCliente',
      as: 'facturas'
    });
    
    // Asociación muchos a uno: Un cliente pertenece a un tipo de documento
    Client.belongsTo(models.Documento, {
      foreignKey: 'tipoIdentificacion', 
      as: 'documento'
    });
  };
  
  return Client;
};
