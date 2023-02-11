import db from "../database";
import order_prodcut from "../types/order-product.types";
class Ordermodel {
  async create(o: order_prodcut): Promise<order_prodcut> {
    try {
      const Connection = await db.connect();
      const sql = `insert into order_products(order_id,product_id,quantity)values($1,$2,$3) returning *`;
      const result = await Connection.query(sql, [
        o.order_id,
        o.product_id,
        o.quantity
        
      ]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable Create Order");
    }
  }
  async getall(o: order_prodcut): Promise<order_prodcut[]> {
    try {
      const Connection = await db.connect();
      const sql = `select 
      orders.id,
       product.name as product_name ,
        product.price ,
         orders.status,
         order_status.status_name,
         order_products.quantity
         from order_products
         inner join orders on orders.id = order_products.order_id
         inner join order_status on order_status.id = orders.status
         inner join product on product.id =  order_products.product_id
      `;
      const result = await Connection.query(sql);
      Connection.release();
      return result.rows;
    } catch (error) {
      throw new Error("Unable To Get * Order Items");
    }
  }
  async getone(id: string): Promise<order_prodcut> {
    try {
      const Connection = await db.connect();
      const sql = `select 
      orders.id,
       product.name as product_name ,
        product.price ,
         orders.status,
         order_status.status_name,
         order_products.quantity
         from order_products
         inner join orders on orders.id = order_products.order_id
         inner join order_status on order_status.id = orders.status
         inner join product on product.id =  order_products.product_id where orders.id=($1)`;
      const result = await Connection.query(sql, [id]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Get Orders Item");
    }
  }
  async update(o: order_prodcut): Promise<order_prodcut> {
    try {
      const Connection = await db.connect();
      const sql = `update order_products set product_id = $1,order_id=$2,quantity=$3 returning *`;
      const result = await Connection.query(sql, [
        o.product_id,
        o.order_id,
        o.quantity
      ]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Update Order Items");
    }
  }
  async deletes(id: string): Promise<order_prodcut> {
    try {
      const Connection = await db.connect();
      const sql = `delete from order_products where id=($1)`;
      const result = await Connection.query(sql, [id]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Delete Product Item");
    }
  }
}
export default Ordermodel;
