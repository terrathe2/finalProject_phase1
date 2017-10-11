'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'MK_Mahasiswas',
        'courseDate',
        {
          type: Sequelize.DATE,
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
