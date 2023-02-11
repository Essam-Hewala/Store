# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

## Users

1. Create a new user

[POST] `/operations/users/`

```bash
{
"username": <User Username>,
"first_name": <User First Name>,
"last_name": <User Last Name>,
"password": <User Password>
}
```

Successful Response:

```bash
  {
    "username": {
        "id": <user id>,
        "username": <username>,
        "first_name": <user first name>,
        "last_name": <user last name>
    },
}
```

2. Get User With Tokens

[POST] `/operations/users/auth`

```bash
{
    "username": <Username>,
    "password": <Password>
}
```

Successful Response:

```bash
{
    "username": <username>,
    "password": <new password (Encrypted)>,
    "Token": <Token>
}
```

3. Get all users

[GET] `/operations/users` [token required]

Successful Response:

```bash
[
    {
        "id": <user id>,
        "username": <user name>,
        "first_name": <user first name>,
        "last_name": <user last name>
    }
]
```

4. Get a specific user by its id

[GET] `/operations/users/id` [token required]

Successful Response:

```bash
{
    "id": <user id>,
    "username": <user name>,
    "first_name": <user first name>,
    "last_name": <user last name>
}
```

5. Delete a user [token required]

[DELETE] `/operations/users/id` [token required]

```bash
{
}
```

Successful Response:



 Update User

[PATCH] `/operations/users/id` [token required]

Successful Response:

```bash
[
    {
        "id": <user id>,
        "username": <user name>,
        "first_name": <user first name>,
        "last_name": <user last name>
    }
]

## Products

1. Create a new product

[POST] `/operations/product` [token required]

```bash
{
    "name": <Product name>,
    "price": <product price>
}
```

Successful Response:

```bash
{
    "name": <Product name>,
    "price": <product price>
  
}
```

2. List all products 
   [GET] `/operations/product` [token required]

Successful Response:

```bash
[
    {
        "id": <Product id>,
        "name": <Product name>,
        "price": <Product price>
          },
]
```

4. Get a specific product by its id [token required]
   [GET] `/operations/product/id` [token required]

Successful Response:

```bash
{
    "id": <Product id>,
    "name": <Product name>,
    "price": <Product price>
}
```

5. Update a specific product
   [PATCH] `operations/product/` [token required]

```bash
{
    "name": <new product name>,
    "price": <new price>
}
```

Successful Response:

```bash
{
    "id": <product id>,
    "name": <new product name>,
    "price": <new price>
}
```

6. Delete a product
   [DELETE] `/operations/product/id` [token required]

Successful Response:

```bash
{
 
}
```

## Orders

1. Create a new order
   [POST] `/operations/order/` [token required]

```bash
{
    "user_id": <username id>,
    "status": <product id>    
}
```

Successful Response:

```bash
{
    "id": <item id>,
    "user_id": <User id>,
    "status": <status>
}
```

2. List all orders
   [GET] `/operations/order/` [token required]

Successful Response

```bash
[
    {
        "id": <item id>,
        "order_id": <order id>,
        "user_id": <user id>,
        "username": <username>,
        "product_id": <product id>,
        "product_name": <product name>,
        "quantity": <item quantity>
    },
]
```

3. List an order by its id
   [GET] `/operations/order/id` [token required]

Successful Response

```bash
[
    {
        "id": <item id>,
        "order_id": <order id>,
        "user_id": <user id>,
        "username": <username>,
        "product_id": <product id>,
        "product_name": <product name>,
        "quantity": <item quantity>
    }
]
```


5. Edit item inside an order
   [PATCH] `/operations/order/id` [token required]

```bash
{
    "user_id":<user id>,
    "status": <status>
}
```

Successful Response

```bash
{
    "id": <item id>,
    "user_id": <user id>,
    "status": <status>
}
```

6. Delete an order
   [DELETE] `/operations/order/id` [token required]


## Orders Product

1. Create a new order
   [POST] `/operations/op/` [token required]

```bash
{
    "order_id": <Order id>,
    "product_id": <product id>,
    "quantity": <quantity for this product>
}
```

Successful Response:

```bash
{
    "id": <item id>,
    "product_id": <product id>,
    "order_id": <order id>,
    "quantity": <quantity>
}
```

2. List all orders
   [GET] `/operations/op/` [token required]

Successful Response

```bash
[
    {
        "id": <item id>,
        "order_id": <order id>,
        "user_id": <user id>,
        "username": <username>,
        "product_id": <product id>,
        "product_name": <product name>,
        "quantity": <item quantity>
    },
]
```

3. List an order by its id
   [GET] `/operations/op/id` [token required]

Successful Response

```bash
[
    {
        "id": <item id>,
        "order_id": <order id>,
        "user_id": <user id>,
        "username": <username>,
        "product_id": <product id>,
        "product_name": <product name>,
        "quantity": <item quantity>
    }
]
```


5. Edit item inside an order
   [PATCH] `/operations/op/id` [token required]

```bash
{
    "order_id": <Order id>,
    "product_id": <product id>,
    "quantity": <quantity for this product>
}
```

Successful Response

```bash
{
    "id": <item id>,
    "user_id": <user id>,
    "product_id": <product id>,
    "order_id": <order id>,
    "quantity": <item new quantity>
}
```

6. Delete an order
   [DELETE] `/operations/op/id` [token required]
