//Configuration to generate database migrations
//to replace .sync()

const { config } = require('./../config/config');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// //Connection URI
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development : {
    url: config.dbUrl,
    dialect: "postgres",
  },
  production : {
    url: config.dbUrl,
    dialect: "postgres",
    dialectOptions: {
    ssl : {
      rejectUnauthorized: false
      }
    }
  }
}


