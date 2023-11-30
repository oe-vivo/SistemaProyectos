'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    static associate(models) {
      // Relación con Donatario


      // Relación de muchos a muchos con Donador
      Proyecto.belongsToMany(models.Donador, {
        through: 'ProyectoDonador',
        foreignKey: 'proyectoId',
        otherKey: 'donadorId',
        as: 'donadores'
      });
    }
  }

  Proyecto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    // Nota: El campo 'donadores' se ha eliminado ya que la relación se maneja a través de la asociación
  }, {
    sequelize,
    modelName: 'Proyecto',
  });

  return Proyecto;
};
