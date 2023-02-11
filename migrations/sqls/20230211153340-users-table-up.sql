/* Replace with your SQL commands */
CREATE TABLE users(
    id serial primary key,
    username varchar(100) not null,
    first_name VARCHAR(100)not null,
    last_name VARCHAR(100)not null,
    password varchar(100) not null 
);