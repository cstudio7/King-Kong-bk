'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ratings extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Ratings.belongsTo(models.Users, {
                foreignKey: 'userId'
            });

            Ratings.belongsTo(models.Accommodations, {
                foreignKey: 'accommodationId'
            });
        }
    }
    Ratings.init({
        userId: DataTypes.INTEGER,
        accommodationId: DataTypes.INTEGER,
        rating: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Ratings',
    });
    return Ratings;
};
