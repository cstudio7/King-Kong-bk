'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     **/
    static associate(models) {
      // define association here
      // Users.hasMany(models.Requests, {
      //   foreignKey: 'user'
      // });
      // Users.hasMany(models.chat, {
      //   foreignKey: 'userId'
      // });
      // Users.hasOne(models.UserProfile, {
      //   foreignKey: 'userId',
      //   as: 'userProfile'
      // });
      // Users.hasMany(models.Comment, {
      //   foreignKey: 'user'
      // });
      // Users.hasMany(models.Like, {
      //   foreignKey: 'user'
      // });
      // Users.hasMany(models.Feedbacks, {
      //   foreignKey: 'user'
      // });
      // Users.hasOne(models.ProfilePictures, {
      //   foreignKey: 'user'
      // });
      // Users.hasMany(models.Notifications, {
      //   foreignKey: 'userId',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE'
      // });
    }
  }
  Users.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-zA-Z0-9_]+$', 'i']
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-zA-Z0-9_]+$', 'i']
      }
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userRoles: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Requester',
      validate: {
        isIn: {
          args: [
            [
              'Travel Team Member',
              'Travel Administrator',
              'Manager',
              'Requester',
              'Accommodation Supplier'
            ]
          ],
          msg:
              'User Roles must either be Travel Team Member, Travel Administrator, Manager or Requester'
        }
      }
    },
    accountVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    emailAllowed: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    requestAutofill: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }

}, {
    sequelize,
    modelName: 'Users',
  })
  return Users;
};


// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
//   return User;
// };