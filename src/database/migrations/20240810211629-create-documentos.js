'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // Método que se ejecuta cuando se aplica la migración (up)
async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Documentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipoDocumento: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('Documentos');
  }
};
