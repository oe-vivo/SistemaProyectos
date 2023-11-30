'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('ProyectoDonadors', [{
     *   proyectoId: 1,
     *   donadorId: 1,
     *   createdAt: new Date(),
     *   updatedAt: new Date()
     * }], {});
     */
    await queryInterface.bulkInsert('ProyectoDonadors', [
      {
        proyectoId: 1, // Reemplaza con el ID del proyecto deseado
        donadorId: 1, // Reemplaza con el ID del donador deseado
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        proyectoId: 2, // Reemplaza con el ID del proyecto deseado
        donadorId: 2, // Reemplaza con el ID del donador deseado
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('ProyectoDonadors', null, {});
     */
    await queryInterface.bulkDelete('ProyectoDonadors', null, {});
  }
};
