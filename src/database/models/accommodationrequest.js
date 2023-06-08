'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AccommodationRequests extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    }
    AccommodationRequests.init({
        requestId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Requests',
                key: 'id'
            }
        },
        accommodationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Accommodations',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'AccommodationRequests',
    });
    return AccommodationRequests;
};

