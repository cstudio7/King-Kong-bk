'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Bookings.belongsTo(models.Rooms, {
      //   onDelete: 'CASCADE',
      //   foreignKey: 'roomId'
      // });
      // Bookings.belongsTo(models.Requests, {
      //   onDelete: 'CASCADE',
      //   foreignKey: 'requestId'
      // });

    }
  }
  Bookings.init({
    requestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Requests',
        key: 'id'
      }
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rooms',
        key: 'id'
      }
    },
    checkIn: DataTypes.DATEONLY,
    checkOut: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Bookings',
  });
  return Bookings;
};

