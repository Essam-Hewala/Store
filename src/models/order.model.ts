import db from "../database";
import order from "../types/order.types";
class Ordermodel {
  async create(o: order): Promise<order> {
    try {
      const Connection = await db.connect();
      const sql = `insert into orders(user_id,status)values($1,$2) returning *`;
      const result = await Connection.query(sql, [
        o.user_id,
        o.status
        
      ]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable Create Order");
    }
  }
  async getall(o: order): Promise<order[]> {
    try {
      const Connection = await db.connect();
      const sql = `select 
      users.username ,
       users.first_name ,
       users.last_name,
       product.name as product_name ,
        product.price ,
         orders.status,
         order_status.status_name,
         order_products.quantity
         from users 
         inner join orders on orders.user_id = users.id
         inner join order_status on order_status.id = orders.status
         inner join order_products on order_products.order_id =   orders.id
         inner join product on product.id =  order_products.product_id
      `;
      const result = await Connection.query(sql);
      Connection.release();
      return result.rows;
    } catch (error) {
      throw new Error("Unable To Get * Orders");
    }
  }
  async getone(id: string): Promise<order> {
    try {
      const Connection = await db.connect();
      const sql = `select 
      users.username ,
       users.first_name ,
       users.last_name,
       product.name as product_name ,
        product.price ,
         orders.status,
         order_status.status_name,
         order_products.quantity
         from users 
         inner join orders on orders.user_id = users.id
         inner join order_status on order_status.id = orders.status
         inner join order_products on order_products.order_id =   orders.id
         inner join product on product.id =  order_products.product_id where orders.id=($1)`;
      const result = await Connection.query(sql, [id]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Get Order");
    }
  }
  async update(o: order): Promise<order> {
    try {
      const Connection = await db.connect();
      const sql = `update orders set user_id = $1,status=$2 returning *`;
      const result = await Connection.query(sql, [
        o.user_id,
        o.status
      ]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Update Order");
    }
  }
  async deletes(id: string): Promise<order> {
    try {
      const Connection = await db.connect();
      const sql = `delete from orders where id=($1)`;
      const result = await Connection.query(sql, [id]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Delete Order");
    }
  }
}
export default Ordermodel;
