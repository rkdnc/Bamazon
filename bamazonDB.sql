DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INTEGER AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(255) NOT NULL,
	department_name VARCHAR (255) NOT NULL,
	price DECIMAL(5, 2) NOT NULL,
    stock_quantity INTEGER,
    primary key (item_id)
);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("Hylian Shield Replica", "Novelties", 59.99, 20);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("Bamazon Kindle", "Electronics", 129.99, 100);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("an unhealthy amount of mayonnaise", "Food", 100.00, 1);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("a live panther", "Pets & Pet Goods", 60.00, 8);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("Nintendo Switch", "Electronics", 299.99, 10);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("The Lord of the Rings: Extended Edition (Blu-Ray)", "Movies", 59.99, 18);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("Nicol Bolas Funko Pop", "Novelties", 19.99, 12);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("Betta Fish Flakes", "Pets & Pet Goods", 9.99, 1000);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("GTX GeForce 1080 TI", "Electronics", 599.99, 120);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("Lettuce", "Food", 3.99, 1000);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) VALUES
("Clerks", "Movies", 8.99, 100);