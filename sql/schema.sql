DROP DATABASE IF EXISTS grocery_db;

CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE groceries (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    quantity INT NOT NULL
);
