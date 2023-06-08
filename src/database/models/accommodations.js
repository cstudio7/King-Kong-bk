'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Accommodations extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        // Accommodations.hasMany(models.Rooms, {
        //   foreignKey: 'accommodationId',
        //   onDelete: 'CASCADE',
        //   onUpdate: 'CASCADE'
        // });
        // Accommodations.belongsTo(models.Locations, {
        //   foreignKey: 'locationId',
        //   onDelete: 'CASCADE'
        // });
        // Accommodations.belongsToMany(models.Requests, {
        //   through: 'AccommodationRequests',
        //   as: 'requests',
        //   foreignKey: 'accommodationId'
        // });
        // Accommodations.hasMany(models.Like, {
        //   foreignKey: 'accommodation',
        //   onDelete: 'CASCADE',
        //   onUpdate: 'CASCADE'
        // });
        // Accommodations.hasMany(models.Feedbacks, {
        //   foreignKey: 'accommodation',
        //   onDelete: 'CASCADE',
        //   onUpdate: 'CASCADE'
        // });
        // Accommodations.hasMany(models.Ratings, {
        //   foreignKey: 'accommodationId'
        // });

        }
    }
    Accommodations.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        status: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: 'Available',
            validate: {
                isIn: {
                    args: [['Available', 'Unavailable']],
                    msg: 'Status can only be Available or Unavailable'
                }
            }
        },
        imageUrl: {
            allowNull: true,
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        amenities: {
            allowNull: true,
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        locationId: { type: DataTypes.INTEGER, allowNull: false },
        description: {
            allowNull: true,
            type: DataTypes.TEXT
        },
        services: {
            allowNull: true,
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        owner: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        maplocations: {
            allowNull: false,
            type: DataTypes.JSONB
        }
    }, {
        sequelize,
        modelName: 'Accommodations',
    });
    return Accommodations;
};







// const accommodations = (sequelize, DataTypes) => {
//   const Accommodations = sequelize.define(
//     'Accommodations',
//     {
//       name: {
//         allowNull: false,
//         type: DataTypes.STRING
//       },
//       status: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         defaultValue: 'Available',
//         validate: {
//           isIn: {
//             args: [['Available', 'Unavailable']],
//             msg: 'Status can only be Available or Unavailable'
//           }
//         }
//       },
//       imageUrl: {
//         allowNull: true,
//         type: DataTypes.ARRAY(DataTypes.STRING)
//       },
//       amenities: {
//         allowNull: true,
//         type: DataTypes.ARRAY(DataTypes.STRING)
//       },
//       locationId: { type: DataTypes.INTEGER, allowNull: false },
//       description: {
//         allowNull: true,
//         type: DataTypes.TEXT
//       },
//       services: {
//         allowNull: true,
//         type: DataTypes.ARRAY(DataTypes.STRING)
//       },
//       owner: {
//         allowNull: false,
//         type: DataTypes.INTEGER
//       },
//       maplocations: {
//         allowNull: false,
//         type: DataTypes.JSONB
//       }
//     },
//     {}
//   );
//   Accommodations.associate = (models) => {
//     Accommodations.hasMany(models.Rooms, {
//       foreignKey: 'accommodationId',
//       onDelete: 'CASCADE',
//       onUpdate: 'CASCADE'
//     });
//     Accommodations.belongsTo(models.Locations, {
//       foreignKey: 'locationId',
//       onDelete: 'CASCADE'
//     });
//     Accommodations.belongsToMany(models.Requests, {
//       through: 'AccommodationRequests',
//       as: 'requests',
//       foreignKey: 'accommodationId'
//     });
//     Accommodations.hasMany(models.Like, {
//       foreignKey: 'accommodation',
//       onDelete: 'CASCADE',
//       onUpdate: 'CASCADE'
//     });
//     Accommodations.hasMany(models.Feedbacks, {
//       foreignKey: 'accommodation',
//       onDelete: 'CASCADE',
//       onUpdate: 'CASCADE'
//     });
//     Accommodations.hasMany(models.Ratings, {
//       foreignKey: 'accommodationId'
//     });
//   };
//   return Accommodations;
// };
// export default accommodations;
