/* Replace with your SQL commands */

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    status INT REFERENCES order_status(id)
);
