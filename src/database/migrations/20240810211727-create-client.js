'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  // Método que se ejecuta cuando se aplica la migración (up)
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreCliente: {
        type: Sequelize.STRING
      },
      tipoIdentificacion: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Documentos',
          key: 'id'      
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      numeroIdentificacion: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Clients');
  }
};