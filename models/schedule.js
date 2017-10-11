'use strict';
module.exports = (sequelize, DataTypes) => {
  var Schedule = sequelize.define('Schedule', {
    id_mk: DataTypes.INTEGER,
    tanggal: DataTypes.DATE
  });
    Schedule.associate = model =>{
    Schedule.belongsTo(model.Matakuliah, {foreignKey : 'id_mk'})
  }

  return Schedule;
};
