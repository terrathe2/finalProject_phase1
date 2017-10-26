'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addConstraint(
      'MK_Mahasiswas', ['id_mahasiswa'], {
  	     type: 'FOREIGN KEY',
         name: 'konjungsi_mahasiswa_foreign',
         references: { //Required field
           table: 'Mahasiswas',
           field: 'id'
    		 },

    		onDelete: 'cascade',
        onUpdate: 'cascade'
    	}
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
