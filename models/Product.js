// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const { DECIMAL } = require('sequelize');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// Add to support foreign key
const Category = require('./Category');

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    // product_name VARCHAR(100) NOT NULL,
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // price DECIMAL(10,2) NOT NULL, -- DECIMAL(Max digits, digits after decimal point)
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },

    // stock INT NOT NULL DEFAULT 10,
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },

    // category_id INT
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      
      }
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
