'use strict';
module.exports = (sequelize, DataTypes) => {
  var MK_Mahasiswa = sequelize.define('MK_Mahasiswa', {
    id_mk: DataTypes.INTEGER,
    id_mahasiswa: DataTypes.INTEGER,
    status: DataTypes.STRING,
    courseDate: DataTypes.DATE
  })

  MK_Mahasiswa.associate = model =>{
    MK_Mahasiswa.belongsTo(model.Matakuliah, {foreignKey : 'id_mk'})
    MK_Mahasiswa.belongsTo(model.Mahasiswa, {foreignKey : 'id_mahasiswa'})
  }
  return MK_Mahasiswa;
};
