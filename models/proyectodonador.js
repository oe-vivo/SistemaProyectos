'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProyectoDonador extends Model {
    static associate(models) {
      // Definir la relación de muchos a muchos entre Proyecto y Donador
      ProyectoDonador.belongsTo(models.Proyecto, {
        foreignKey: 'proyectoId',
        as: 'proyecto', // Nombre de la asociación
      });
      ProyectoDonador.belongsTo(models.Donador, {
        foreignKey: 'donadorId',
        as: 'donador', // Nombre de la asociación
      });
    }
  }

  ProyectoDonador.init(
      {
        donadorId: DataTypes.INTEGER,
        proyectoId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'ProyectoDonador',
      }
  );

  return ProyectoDonador;
};
