const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('./../db/models/index')

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// //Connection URI
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : () => {},
}

if(config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}
//Incorporate Pooling
const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

//Take the models and create a structure
// sequelize.sync();

module.exports = sequelize;
