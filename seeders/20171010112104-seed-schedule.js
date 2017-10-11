'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Schedules', [
    {
      id_mk : 3,
      tanggal : new Date("2017-10-10 15:00:000")
    },
    {
      id_mk : 3,
      tanggal : new Date("2017-10-12 17:00:000")
    },
    {
      id_mk : 3,
      tanggal : new Date("2017-10-17 15:00:000")
    },
    {
      id_mk : 3,
      tanggal : new Date("2017-10-19 17:00:000")
    },
    {
      id_mk : 3,
      tanggal : new Date("2017-10-24 15:00:000")
    },
    {
      id_mk : 3,
      tanggal : new Date("2017-10-26 17:00:000")
    },
    {
      id_mk : 3,
      tanggal : new Date("2017-10-31 15:00:000")
    },
    {
      id_mk : 3,
      tanggal : new Date("2017-11-2 17:00:000")
    },
    {
      id_mk : 2,
      tanggal : new Date("2017-10-10 17:00:000")
    },
    {
      id_mk : 2,
      tanggal : new Date("2017-10-17 17:00:000")
    },
    {
      id_mk : 2,
      tanggal : new Date("2017-10-24 17:00:000")
    },
    {
      id_mk : 2,
      tanggal : new Date("2017-10-31 17:00:000")
    },
    {
      id_mk : 1,
      tanggal : new Date("2017-10-11 20:00:000")
    },
    {
      id_mk : 1,
      tanggal : new Date("2017-10-18 20:00:000")
    },
    {
      id_mk : 1,
      tanggal : new Date("2017-10-25 20:00:000")
    },
    {
      id_mk : 1,
      tanggal : new Date("2017-11-1 20:00:000")
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Schedules", null, {});
  }
};
