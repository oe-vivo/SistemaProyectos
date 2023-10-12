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
    await queryInterface.bulkInsert('Donadors',[
      {
        rfc:100001,
        nombre:"HSBC",
        imagen: null,
        proyectosAsociados: "EmotionIA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rfc:100002,
        nombre:"Bancomer",
        imagen: null,
        proyectosAsociados: "Nimbus",
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
    await queryInterface.bulkDelete('Donadors',null,{});

  }
};
