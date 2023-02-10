/* Replace with your SQL commands */
CREATE TABLE users(
    id serial primary key,
    username varchar(100) not null,
    first_name VARCHAR(100)not null,
    last_name VARCHAR(100)not null,
    password varchar(100) not null 
);
CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INT
);
CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES product(id),
    quantity INT
);