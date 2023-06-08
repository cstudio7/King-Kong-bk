'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Like.belongsTo(models.Accommodations, {
        foreignKey: 'accommodation',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Like.belongsTo(models.Users, {
        foreignKey: 'user',
        onDelete: 'CASCADE'
      });
    }
  }
  Like.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    accommodation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    }
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};