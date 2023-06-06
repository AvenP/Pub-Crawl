// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/config.js');

// Initialize Product model (table) by extending off Sequelize's Model class
class Pub extends Model {}

// set up fields and rules for Product model

Pub.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    zip_Code: {
        type: DataTypes.INTEGER,
        allowNul: false,
        defaultValue: 5,
        validate:{
            isNumeric: true,
          }
    },

    link: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'brewery',
  }
);

module.exports = Pub;