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
}
export default Usermodel;
