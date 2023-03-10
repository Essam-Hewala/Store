# Store
Store Back End Task For EGFWD Task 2
## Getting Started

This repo contains a storefront API created for a project, to get started please use `yarn` to install modules and dependencies
## setup and connect to the database

This repo uses Postgres SQL as a database engine. to be able to connect to a database please update your database parameters in .env file.

I provided .env.example file within this repo, please rename it to be .env and fill It with your database connection parameters.

By default, this application runs on port 3150, but It can be changed through .env file

## Create DB 
CREATE DATABASE store;
CREATE DATABASE store_test;

## Create User
create user store_user with password 'A_123456';

## Grant Access To DB 
GRANT ALL PRIVILEGES ON DATABASE store to store_user;  
GRANT ALL PRIVILEGES ON DATABASE store_test to store_user;
### 1. rename .env file

There is a file called .env.example file, you have to rename It to be .env and then fill it all required data as following:

```bash

PORT=3150 ---> 'Default port for running the server, You can leave It to default.'
NODE_ENV=dev ---> 'Used to determine If working on dev or test database, You can leave It to default.'
POSTGRES_HOST= ---> 'Postgres SQL Hostname'
POSTGRES_PORT=5433 --- 'Postgres SQL Port, You can leave It to default.'
POSTGRES_USER= ---> 'Database Username'
POSTGRES_PASSWORD= ---> 'Database password'
POSTGRES_DB= ---> 'Database Name (For development) -> Store'
POSTGRES_DB_TEST= ---> 'Database Name (For unit testing) -> Store_test'
BCRYPT_PASSWORD= ---> 'bcrypt password'
SLART_ROUNDS=10 ---> 'Salt Rounds, You can leave It to default.'
TOKEN_SECRET=! ---> 'JWT Token secret'
please install all dependencies using `yarn`


All database schema has been created into sql files with db-migrations, you have to run migration in order to continue using the application using this below command.

`yarn mgup` --> migration Up
 
for down the migiration `yarn mgdown` --> migration down

## application operation

`yarn start` to start your application in build mode (run in typescript).
`yarn test` to build application then run all nessesary tests.



Note : You Have To Run Migiration Before Checking The CRUD Operation With The Database , 
You Have To Insert Data In 
User Module First , 
Then In Product Module Then 
Final In Orders Module To Make Every Thing Work Correctely  


## Database Schema 
 TABLE users(
    id serial primary key,
    username varchar(100) not null,
    first_name VARCHAR(100)not null,
    last_name VARCHAR(100)not null,
    password varchar(100) not null 
)
TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INT
)
TABLE order_status (
    id SERIAL PRIMARY KEY,
    status_name VARCHAR(50)
)

TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    status INT REFERENCES order_status(id)
)


TABLE order_products(
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES product(id),
    order_id INT REFERENCES orders(id),
    quantity INT)