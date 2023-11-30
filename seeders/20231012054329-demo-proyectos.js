'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Obtén las IDs de los donatarios y donadores que corresponden a los proyectos
    const donatarioId1 = await queryInterface.rawSelect('Donatarios', {
      where: { nombre: 'NombreDonatario1' },
    }, ['id']);
    const donatarioId2 = await queryInterface.rawSelect('Donatarios', {
      where: { nombre: 'NombreDonatario2' },
    }, ['id']);

    const donadorId1 = await queryInterface.rawSelect('Donadors', {
      where: { nombre: 'NombreDonador1' },
    }, ['id']);
    const donadorId2 = await queryInterface.rawSelect('Donadors', {
      where: { nombre: 'NombreDonador2' },
    }, ['id']);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Proyectos', [
      {
        nombre: "Nimbus",
        descripcion: "Proyecto Pyme reposteria",
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "EmotionIA",
        descripcion: "Proyecto de software para psicologia",
        imagen: null,

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
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Proyectos', null, {});
  }
};
