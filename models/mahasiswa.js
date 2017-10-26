'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mahasiswa = sequelize.define('Mahasiswa', {
    name: DataTypes.STRING,
    email: {
            type: DataTypes.STRING,
            validate: {
                        isEmail: {
                          msg: "Email input is not valid"
                        },
                        isUnique:function(value, next) {
                          Mahasiswa.find({
                              where: {
                                      email: value,
                                      id:{
                                          [sequelize.Op.not]: this.id
                                         }
                                     }
                          })
                          .then(function(match) {
                            if (match){
                              return next('Email address already in use!');
                            } else {
                              return next();
                            }
                          })
                        }
                      }
           }
  })

  Mahasiswa.associate = model =>{
    Mahasiswa.hasMany(model.MK_Mahasiswa, {foreignKey : 'id_mahasiswa'})
    Mahasiswa.belongsToMany(model.Matakuliah, {through: 'MK_Mahasiswa', foreignKey : 'id_mahasiswa'})
  }
  return Mahasiswa;
};
