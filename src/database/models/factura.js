module.exports = (sequelize, DataTypes) => {
  const Factura = sequelize.define('Factura', {
    fecha: DataTypes.DATE,
    nombreProducto: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    valorDescuento: DataTypes.DECIMAL,
    iva: DataTypes.DECIMAL,
    valorTotal: DataTypes.DECIMAL,
  }, {});
  
  Factura.associate = function(models) {
    Factura.belongsTo(models.Client, {
      foreignKey: 'idCliente',
      as: 'cliente'
    });
  };
  
  return Factura;
};
