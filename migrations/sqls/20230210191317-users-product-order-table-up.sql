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
CREATE TABLE order_status (
    id SERIAL PRIMARY KEY,
    status_name VARCHAR(50)
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    status INT REFERENCES order_status(id)
);


CREATE TABLE order_products(
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES product(id),
    order_id INT REFERENCES orders(id),
    quantity INT
);
INSERT INTO order_status (id, status_name) VALUES (1, 'Active'), (2, 'Completed');
