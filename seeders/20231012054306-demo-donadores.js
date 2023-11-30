'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

        // Obtén las IDs de proyectos que deseas asociar
    const proyectoIds = await queryInterface.sequelize.query("SELECT id FROM proyectos;");

    // Crea registros de donadores con sus respectivas asociaciones a proyectos
    const donadorData = [
      {
        rfc: 100001,
        nombre: 'HSBC',
        imagen: null,
        proyectoId: proyectoIds[0][1].id, // Asociado al proyecto con ID 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rfc: 100002,
        nombre: 'Bancomer',
        imagen: null,
        proyectoId: proyectoIds[0][0].id, // Asociado al proyecto con ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Donadors', donadorData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Elimina los registros de donadores
    await queryInterface.bulkDelete('Donadors', null, {});
  }
};
