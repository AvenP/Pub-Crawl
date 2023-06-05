const Sequelize = require('sequelize');

require('dotenv').config();

// Connection to database

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(

    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PW,

    process.env.DB_NAME = 'brewery_db',
    process.env.DB_USER = 'root',
    process.env.DB_PW = 'password',

    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;
