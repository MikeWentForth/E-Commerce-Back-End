const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns

    // FROM schema.sql (MYSQL)
    // id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, 
      allowNull: false, 
      primaryKey: true
    },
    // tag_name VARCHAR(100)
    tag_name: {
      type: DataTypes.STRING
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
