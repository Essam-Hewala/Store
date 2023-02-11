/* Replace with your SQL commands */
CREATE TABLE order_status (
    id SERIAL PRIMARY KEY,
    status_name VARCHAR(50)
);
INSERT INTO order_status (id, status_name) VALUES (1, 'Active'), (2, 'Completed');
