'use strict';
module.exports = (sequelize, DataTypes) => {
  var Matakuliah = sequelize.define('Matakuliah', {
    mk_name: DataTypes.STRING,
  })

  Matakuliah.associate = model =>{
    Matakuliah.hasMany(model.Schedule, {foreignKey : 'id_mk'})
    Matakuliah.hasMany(model.MK_Mahasiswa, {foreignKey : 'id_mk'})
    Matakuliah.belongsToMany(model.Mahasiswa, {through : 'MK_Mahasiswa', foreignKey : 'id_mk'})
  }
  return Matakuliah;
};
