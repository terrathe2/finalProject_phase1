'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
    return queryInterface.bulkDelete('Mahasiswas', [{
      name : 'Ahmad Nizar'
    },{
      name : 'redha putra'
    }])
  }
};
