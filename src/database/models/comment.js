'use strict';
import emitter from '../../utils/eventEmitters/emitter';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Comment.belongsTo(models.Requests, {
                foreignKey: 'request',
                onDelete: 'CASCADE'
            });
            Comment.belongsTo(models.Users, {
                foreignKey: 'user',
                onDelete: 'CASCADE'
            });
        }
    }
    Comment.init({
        user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        request: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Comment',
    });
    Comment.afterCreate(({ dataValues }) => {
        emitter.emit('new comment', dataValues);
    });
    return Comment;
};