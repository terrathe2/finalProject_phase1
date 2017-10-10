'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mahasiswa = sequelize.define('Mahasiswa', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  })

  Mahasiswa.associate = model =>{
    Mahasiswa.hasMany(model.MK_Mahasiswa, {foreignKey : 'id_mahasiswa'})
    Mahasiswa.belongsToMany(model.Matakuliah, {through: 'MK_Mahasiswa', foreignKey : 'id_mahasiswa'})
  }
  return Mahasiswa;
};