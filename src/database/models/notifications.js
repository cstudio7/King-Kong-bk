'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Notifications extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Notifications.belongsTo(models.Users, {
                foreignKey: 'userId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            Notifications.belongsTo(models.Requests, {
                foreignKey: 'requestId',
                onDelete: 'CASCADE'
            });
        }
    }
    Notifications.init({
        notification: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.STRING
        },
        requestId: {
            allowNull: true,
            type: DataTypes.STRING
        },
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: 'Notifications',
    });
    return Notifications;
};





// export default (sequelize, DataTypes) => {
//   const Notifications = sequelize.define(
//     'Notifications',
//     {
//       notification: DataTypes.STRING,
//       userId: {
//         type: DataTypes.INTEGER
//       },
//       type: {
//         type: DataTypes.STRING
//       },
//       requestId: {
//         allowNull: true,
//         type: DataTypes.STRING
//       },
//       read: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false
//       }
//     },
//     {}
//   );
//   Notifications.associate = (models) => {
//     Notifications.belongsTo(models.Users, {
//       foreignKey: 'userId',
//       onDelete: 'CASCADE',
//       onUpdate: 'CASCADE'
//     });
//     Notifications.belongsTo(models.Requests, {
//       foreignKey: 'requestId',
//       onDelete: 'CASCADE'
//     });
//   };
//   return Notifications;
// };
