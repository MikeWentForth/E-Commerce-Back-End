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
    -- catergory_id reference category.id XXXXX
);


CREATE TABLE Tag
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tag_name VARCHAR(100) 
);


CREATE TABLE ProductTag
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT VARCHAR(100) NOT NULL,
    tag_id INT
    price DECIMAL(10,2) NOT NULL -- DECIMAL(Max digits, digits after decimal point)
    stock INT NOT NULL AUTO_INCREMENT
    category_id INT 
);


-- CREATE 