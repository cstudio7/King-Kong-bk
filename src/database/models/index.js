import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { development, production, testing } from '../config';

const environment = {
    development,
    production,
    testing,
};

const basename = path.basename(__filename);
const env = process.env.NODE_ENV;
const config = environment[env];
const sequelize = new Sequelize(config.url, config);
const db = {};
fs.readdirSync(__dirname)
    .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;