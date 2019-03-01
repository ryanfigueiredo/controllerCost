'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departamento = sequelize.define('Departamento', {
    nome: { type: DataTypes.STRING(100),  allowNull: false }
  }, {});
  Departamento.associate = function(models) {
  };
  return Departamento;
};