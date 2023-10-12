'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    async getProyectos() {
      const proyectos = await this.getProyectos();
      return proyectos;
    }


    static associate(models) {
      Donador.belongsToMany(models.Proyecto, {
        through: 'ProyectoDonador',
        foreignKey: 'donadorId',
        otherKey: 'proyectoId',
      });
    };
  }
  Donador.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    rfc: DataTypes.INTEGER,
    proyectosAsociados: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Donador',
  });
  return Donador;
};