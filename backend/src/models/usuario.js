'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    nome: { type: DataTypes.STRING,  allowNull: false },
    senha: { type: DataTypes.STRING,  allowNull: false }
  }, {});
  usuario.associate = function(models) {
  };
  return usuario;
};