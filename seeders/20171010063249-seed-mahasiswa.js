'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Mahasiswas', [{
      name : 'Ahmad Nizar',
      email : 'ahmadnizar.owl@gmail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'redha putra',
      email : 'terrathe2@gmail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'zuhri nurhuda',
      email : 'putra.redha@gmail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'syaipul',
      email : 'ipung.anwar1@gmail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Mahasiswas', [{
      name : 'Ahmad Nizar'
    },{
      name : 'redha putra'
    }])
  }
};
