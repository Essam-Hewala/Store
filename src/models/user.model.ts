import db from "../database";
import user from "../types/users.type";
class Usermodel {
  async create(u: user): Promise<user> {
    try {
      const Connection = await db.connect();
      const sql = `insert into users(username,fname,password)values($1,$2,$3) returning *`;
      const result = await Connection.query(sql, [
        u.username,
        u.fname,
        u.password
      ]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Create User");
    }
  }
  async getall(u: user): Promise<user[]> {
    try {
      const Connection = await db.connect();
      const sql = `select * from users`;
      const result = await Connection.query(sql);
      Connection.release();
      return result.rows;
    } catch (error) {
      throw new Error("Unable To Get * Users");
    }
  }
  async getone(id: string): Promise<user> {
    try {
      const Connection = await db.connect();
      const sql = `select * from users where id=($1)`;
      const result = await Connection.query(sql, [id]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Get User");
    }
  }
  async update(u: user): Promise<user> {
    try {
      const Connection = await db.connect();
      const sql = `update users set username = $1,fname=$2,password=$3 returning *`;
      const result = await Connection.query(sql, [
        u.username,
        u.fname,
        u.password
      ]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Update User");
    }
  }
  async deletes(id: string): Promise<user> {
    try {
      const Connection = await db.connect();
      const sql = `delete from users where id=($1)`;
      const result = await Connection.query(sql, [id]);
      Connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error("Unable To Delete User");
    }
  }
}
export default Usermodel;
