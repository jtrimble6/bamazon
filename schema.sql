DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price INTEGER(11) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (id)
);




INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Tesla 3', 'Motor Vehicles', '75000', '2');


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Xbox One', 'Electronics', '350', '7');


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('LeVeon Bell Jersey', 'Clothing/Apparel', '75', '5');


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('IPhone X', 'Electronics', '1000', '3');


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Range Rover', 'Motor Vehicles', '55000', '13');


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Air Jordan 11s', 'Clothing/Apparel', '500', '4');


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Samsung 4K TV', 'Electronics', '700', '5');


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Macbook Pro', 'Electronics', '2000', '8');


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Yeezys', 'Clothing/Apparel', '1500', '3');


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mclaren', 'Motor Vehicles', '375000', '1');


SELECT * FROM products;

