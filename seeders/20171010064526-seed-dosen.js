'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dosens', [{
      name : 'Bang ian',
      username : 'aselole',
      password : 'jos',
      id_mk : 3,
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dosens', [{
      name : 'Bang ian'
    }])
  }
};
