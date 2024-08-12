module.exports = (sequelize, DataTypes) => {
  
  // Definición del modelo 'Factura'
  const Factura = sequelize.define('Factura', {
    fecha: DataTypes.DATE,
    nombreProducto: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    valorDescuento: DataTypes.DECIMAL,
    iva: DataTypes.DECIMAL,
    valorTotal: DataTypes.DECIMAL,
  }, {});
  
  // Definición de asociaciones entre el modelo 'Factura' y  'Client'
  Factura.associate = function(models) {
    Factura.belongsTo(models.Client, {
      foreignKey: 'idCliente',
      as: 'cliente'
    });
  };
  
  return Factura;
};
