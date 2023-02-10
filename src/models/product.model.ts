import db from "../database";
import product from "../types/product.types";
class Productmodel {
  async create(p: product): Promise<product> {
    try {
      const Connection = await db.connect();
      const sql = `insert into product(name,price)values($1,$2) returning *`;
      const result = await Connection.query(sql, [p.name, p.price]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Add Product");
    }
  }
  async getall(p: product): Promise<product[]> {
    try {
      const Connection = await db.connect();
      const sql = `select * from product`;
      const result = await Connection.query(sql);
      Connection.release();
      return result.rows;
    } catch (error) {
      throw new Error("Unable To Get * Products");
    }
  }
  async getone(id: string): Promise<product> {
    try {
      const Connection = await db.connect();
      const sql = `select * from product where id=($1)`;
      const result = await Connection.query(sql, [id]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Get Product");
    }
  }
  async update(p: product): Promise<product> {
    try {
      const Connection = await db.connect();
      const sql = `update product set name = $1,price=$2 returning *`;
      const result = await Connection.query(sql, [p.name, p.price]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Update Product");
    }
  }
  async deletes(id: string): Promise<product> {
    try {
      const Connection = await db.connect();
      const sql = `delete from product where id=($1)`;
      const result = await Connection.query(sql, [id]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Delete The Product");
    }
  }
}
export default Productmodel;
