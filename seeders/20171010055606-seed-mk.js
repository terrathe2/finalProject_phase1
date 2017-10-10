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
    return queryInterface.bulkInsert('Matakuliahs', [{
      mk_name : 'algoritma pemrograman',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      mk_name : 'pemrograman website',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      mk_name : 'statistik',
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
    return queryInterface.bulkDelete('"Matakuliahs', [{
      mk_name : 'algoritma pemrograman'
    },{
      mk_name : 'pemrograman website'
    },{
      mk_name : 'statistik'
    }])
  }
};
