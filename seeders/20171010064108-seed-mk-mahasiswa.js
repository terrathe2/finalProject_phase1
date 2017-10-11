'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MK_Mahasiswas', [{
      id_mk : 3,
      id_mahasiswa : 1,
      createdAt : new Date(),
      updatedAt : new Date(),
      status : "absent",
      courseDate : new Date("2017-10-10 15:00:000")
    },{
      id_mk : 3,
      id_mahasiswa : 1,
      createdAt : new Date(),
      updatedAt : new Date(),
      status : "alpha",
      courseDate : new Date("2017-10-12 17:00:000")
    },
    {
      id_mk : 3,
      id_mahasiswa : 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      status : "late",
      courseDate : new Date("2017-10-10 15:00:000")
    },
    {
      id_mk : 3,
      id_mahasiswa : 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      status : "late",
      courseDate : new Date("2017-10-12 17:00:000")
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
