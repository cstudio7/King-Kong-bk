'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rooms extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Rooms.belongsTo(models.Accommodations, {
                foreignKey: 'accommodationId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            Rooms.hasMany(models.Bookings, {
                foreignKey: 'roomId',
                onDelete: 'CASCADE'
            });
        }
    }
    Rooms.init({
        name: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        accommodationId: { type: DataTypes.INTEGER, allowNull: false },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 'Available',
            validate: {
                isIn: {
                    args: [['Available', 'Unavailable']],
                    msg: 'Status can only be Available or Unavailable'
                }
            }
        },
        price: { type: DataTypes.FLOAT, allowNull: false }
    }, {
        sequelize,
        modelName: 'Rooms',
    });
    return Rooms;
};
