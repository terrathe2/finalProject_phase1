'use strict';
module.exports = (sequelize, DataTypes) => {
  var Matakuliah = sequelize.define('Matakuliah', {
    mk_name: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Matakuliah;
};