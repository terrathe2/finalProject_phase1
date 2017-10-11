'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MK_Mahasiswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_mk: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Matakuliahs',
          key: 'id'
        }
      },
      id_mahasiswa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Mahasiswas',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.STRING
      },
      courseDate: {
        type: 'TIMESTAMP',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MK_Mahasiswas');
  }
};
