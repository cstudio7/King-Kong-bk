'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedbacks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Feedbacks.belongsTo(models.Users, {
        foreignKey: 'user',
        onDelete: 'CASCADE'
      });
      Feedbacks.belongsTo(models.Accommodations, {
        foreignKey: 'accommodation',
        onDelete: 'CASCADE'
      });
    }
  }
  Feedbacks.init({
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    feedback: {
      type: DataTypes.STRING,
      allowNull: false
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
    modelName: 'Feedbacks',
  });
  return Feedbacks;
};





