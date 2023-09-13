const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

// Added for foreign key relationships
const Product = require('./Product');
const Tag = require('./Tag');

ProductTag.init(
  {
    // define columns

    // id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    // product_id INT NOT NULL,
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'id'
      }
    },

    // tag_id INT,  
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: "id"
      }
    }

    // FOREIGN KEY (product_id) REFERENCES Product(id) ON DELETE CASCADE,
    // FOREIGN KEY (tag_id) REFERENCES Tag(id) ON DELETE CASCADE

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
