'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movimentacao = sequelize.define('Movimentacao', {
    descricao: { type: DataTypes.STRING(500),  allowNull: false },
    valor: { type: DataTypes.FLOAT,  allowNull: false }
  }, {});
  Movimentacao.associate = function(models) {
    Movimentacao.belongsTo(models.Funcionario, {
      foreignKey: "funcionarioId",
      onDelete: "CASCADE"
    })
  };
  return Movimentacao;
};