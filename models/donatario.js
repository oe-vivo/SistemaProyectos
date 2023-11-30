'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Donatario extends Model {
    static associate(models) {
      // Relación uno a muchos con Proyecto

    }
  }

  Donatario.init({
    rfc: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING
    // El campo 'proyectoAsociado' se ha eliminado ya que la relación se maneja a través de la asociación
  }, {
    sequelize,
    modelName: 'Donatario',
  });

  return Donatario;
};
