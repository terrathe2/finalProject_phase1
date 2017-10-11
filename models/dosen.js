'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dosen = sequelize.define('Dosen', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Dosen;
};
