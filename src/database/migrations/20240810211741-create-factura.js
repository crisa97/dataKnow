'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // Método que se ejecuta cuando se aplica la migración (up)
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Facturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCliente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients', 
          key: 'id'         
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      fecha: {
        type: Sequelize.DATE
      },
      nombreProducto: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.DECIMAL
      },
      valorDescuento: {
        type: Sequelize.DECIMAL
      },
      iva: {
        type: Sequelize.DECIMAL
      },
      valorTotal: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  
  // Método que se ejecuta cuando se revierte la migración (down)
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Facturas');
  }
};
