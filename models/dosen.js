'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dosen = sequelize.define('Dosen', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  })

  Dosen.associate = model =>{
     Dosen.belongsTo(model.Matakuliah, {foreignKey : 'id_mk'})   
  }
  return Dosen;
};
