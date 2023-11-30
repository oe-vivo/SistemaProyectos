'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Donatarios', [{
     *   rfc: 123456789,
     *   nombre: 'Donatario Ejemplo',
     *   proyectoId: 1, // Reemplaza con el ID del proyecto asociado
     *   imagen: 'url-de-imagen',
     *   createdAt: new Date(),
     *   updatedAt: new Date()
     * }], {});
     */
    await queryInterface.bulkInsert('Donatarios', [
      {
        rfc: 123456789,
        nombre: 'Donatario Ejemplo',
        proyectoId: 1, // Reemplaza con el ID del proyecto asociado
        imagen: 'url-de-imagen',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Donatarios', null, {});
     */
    await queryInterface.bulkDelete('Donatarios', null, {});
  }
};
