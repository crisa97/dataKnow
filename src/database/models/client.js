module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    nombreCliente: DataTypes.STRING,
    numeroIdentificacion: DataTypes.STRING,
    observaciones: DataTypes.TEXT,
  }, {});

  Client.associate = function(models) {
    Client.hasMany(models.Factura, {
      foreignKey: 'idCliente',
      as: 'facturas'
    });
    
    Client.belongsTo(models.Documento, {
      foreignKey: 'tipoIdentificacion', 
      as: 'documento'
    });
  };
  
  return Client;
};
