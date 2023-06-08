'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserProfile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    }
    UserProfile.init({
        userId: DataTypes.INTEGER,
        birthDate: DataTypes.DATE,
        department: DataTypes.STRING,
        lineManager: DataTypes.INTEGER,
        phoneNumber: DataTypes.NUMERIC,
        language: DataTypes.STRING,
        currency: DataTypes.STRING,
        gender: DataTypes.STRING,
        location: DataTypes.STRING,
        passportName: DataTypes.STRING,
        passportNumber: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'UserProfile',
    });
    return UserProfile;
};
