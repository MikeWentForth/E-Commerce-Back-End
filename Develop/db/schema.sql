-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

-- CREATE CATEGORY TABLE
CREATE TABLE Category
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(100) NOT NULL
);

-- CREATE PRODUCT TABLE

CREATE TABLE Product
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL, -- DECIMAL(Max digits, digits after decimal point)
    stock INT NOT NULL DEFAULT 10,
    category_id INT,
    -- VALIDATE price is decimal XXXXX
    -- VALIDATE stock is numeric XXXXX
    FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE CASCADE
);


CREATE TABLE Tag
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tag_name VARCHAR(100) 
);


CREATE TABLE ProductTag
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT NOT NULL,
    tag_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES Tag(id) ON DELETE CASCADE
);


-- CREATE 

-- GIVEN a functional Express.js API

-- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
-- THEN I am able to connect to a database using Sequelize

-- WHEN I enter schema and seed commands
-- THEN a development database is created and is seeded with test data

-- WHEN I enter the command to invoke the application
-- THEN my server is started and the Sequelize models are synced to the MySQL database

-- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
-- THEN the data for each of these routes is displayed in a formatted JSON

-- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
-- THEN I am able to successfully create, update, and delete data in my database