'use strict';
module.exports = (sequelize, DataTypes) => {
  const Funcionario = sequelize.define('Funcionario', {
    nomeFuncionario: { type: DataTypes.STRING(200),  allowNull: false }
  }, {});
  Funcionario.associate = function(models) {
    Funcionario.belongsTo(models.Departamento, {
      foreignKey: 'departamentoId',
      onDelete: 'CASCADE'
    })
  };
  return Funcionario;
};

