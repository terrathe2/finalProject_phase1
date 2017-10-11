'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
    return queryInterface.bulkDelete('"Matakuliahs', [{
      mk_name : 'algoritma pemrograman'
    },{
      mk_name : 'pemrograman website'
    },{
      mk_name : 'statistik'
    }])
  }
};
