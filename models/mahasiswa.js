'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mahasiswa = sequelize.define('Mahasiswa', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Mahasiswa;
};