'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Donador extends Model {
    static associate(models) {
      // Relación de muchos a muchos con Proyecto
      Donador.belongsToMany(models.Proyecto, {
        through: 'ProyectoDonador',
        foreignKey: 'donadorId',
        otherKey: 'proyectoId',
        as: 'proyectos'
      });
    }
  }

  Donador.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    rfc: DataTypes.INTEGER
    // El campo 'proyectosAsociados' se ha eliminado ya que la relación se maneja a través de la asociación
  }, {
    sequelize,
    modelName: 'Donador',
  });

  return Donador;
};
