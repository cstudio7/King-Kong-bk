require('dotenv').config();

module.exports.development = {
  use_env_variable: 'DATABASE_URL_DEV',
  dialect: 'postgres',
  logging: false,
};

module.exports.testing = {
  use_env_variable: 'DATABASE_URL_DEV',
  dialect: 'postgres',
  logging: false,
};

module.exports.production = {
  use_env_variable: 'DATABASE_URL_DEV',
  dialect: 'postgresql',
  logging: false,
};
