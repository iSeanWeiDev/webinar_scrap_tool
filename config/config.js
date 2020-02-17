require('dotenv').config();

var env = {
  "development": {
    "username": process.env.DB_DEV_USERNAME,
    "password": process.env.DB_DEV_PASSWORD,
    "database": process.env.DB_DEV_NAME,
    "host": process.env.DB_DEV_HOST,
    "dialect": "mysql",
  },
  "production": {
    "username": process.env.DB_PRO_USERNAME,
    "password": process.env.DB_PRO_PASSWORD,
    "database": process.env.DB_PRO_NAME,
    "host": process.env.DB_PRO_HOST,
    "dialect": "mysql",
  }
}

module.exports = env;
