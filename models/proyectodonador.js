'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProyectoDonador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProyectoDonador.init({
    donadorId: DataTypes.INTEGER,
    proyectoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProyectoDonador',
  });
  return ProyectoDonador;
};