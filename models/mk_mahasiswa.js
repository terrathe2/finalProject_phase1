'use strict';
module.exports = (sequelize, DataTypes) => {
  var MK_Mahasiswa = sequelize.define('MK_Mahasiswa', {
    id_mk: DataTypes.INTEGER,
    id_mahasiswa: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MK_Mahasiswa;
};