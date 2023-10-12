'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Proyectos',[
      {
        nombre:"Nimbus",
        descripcion: "Proyecto Pyme reposteria",
        imagen: null,
        donatorio: "Octavio Vivo",
        donadores: "Bancomer,Banamex",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre:"EmotionIA",
        descripcion: "Proyecto de software para psicologia",
        imagen: null,
        donatorio: "Emmanuel Ruiz",
        donadores: "Nasa,HSBC,UABC",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Proyectos',null,{});
  }
};
