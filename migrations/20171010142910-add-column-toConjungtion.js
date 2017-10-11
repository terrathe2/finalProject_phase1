'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'MK_Mahasiswas',
        'courseDate',
        {
          type: 'TIMESTAMP',
          allowNull: false
        }
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'MK_Mahasiswas',
      'courseDate'
    )
  }
};
