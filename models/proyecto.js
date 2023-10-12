'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    async getDonadores() {
      const donadores = await this.getDonadores();
      return donadores;
    }

    static associate(models) {
      // define association here
      Proyecto.associate = (models) => {
        Proyecto.belongsToMany(models.Donador, {
          through: 'ProyectoDonador',
          foreignKey: 'proyectoId',
          otherKey: 'donadorId',
        });
      };
    }
  }
  Proyecto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    donatorio: DataTypes.STRING,
    donadores: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proyecto',
  });
  return Proyecto;
};