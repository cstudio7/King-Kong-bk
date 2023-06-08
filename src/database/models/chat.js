'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class chat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
                chat.belongsTo(models.Users, {
                 foreignKey: 'userId'
                });
        }
    }
    chat.init({
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    }, {
        sequelize,
        modelName: 'chat',
    });
    return chat;
};

