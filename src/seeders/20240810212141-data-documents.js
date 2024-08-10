'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Documentos', [
      {
        tipoDocumento: 'Cedula',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipoDocumento: 'Cedula de extranjeria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipoDocumento: 'NIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipoDocumento: 'Pasaporte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipoDocumento: 'RUT',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Documentos', null, {});
  }
};
