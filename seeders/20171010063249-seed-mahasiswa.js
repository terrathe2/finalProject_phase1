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
      email : 'redhaimutnngetsngets@gmail.com',
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
