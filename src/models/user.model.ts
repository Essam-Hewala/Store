import db from "../database";
import user from "../types/users.type";
import bcrypt from 'bcrypt'
import config from "../config";
// hashing function for hash password with adding some salt & pepper
const hashpass = (password :string) =>{
  const salt = parseInt(config.salt as string , 10);
  return bcrypt.hashSync(`${password}${config.pepper}`,salt);
}
class Usermodel {
  async create(u: user): Promise<user> {
    try {
      const Connection = await db.connect();
      const sql = `insert into users(username,fname,password)values($1,$2,$3) returning *`;
      const result = await Connection.query(sql, [
        u.username,
        u.fname,
        hashpass(u.password as unknown as string)
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
        hashpass(u.password as unknown as string)
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
  async authenticate(username : string , password : string):Promise<user|null> {
    try{
      const Connection = await db.connect();
      const sql = `select password from users where username = $1`;
      const result = await Connection.query(sql,[username])
      if(result.rows.length){
        const {password :hashpass} = result.rows[0];
        const ispass = bcrypt.compareSync(`${password}${config.pepper}`,hashpass);
      if(ispass)
      {
        const userinfo = await Connection.query('select * from users where username=$1',[username]);
        return userinfo.rows[0];
      }
      }Connection.release();
      return null;
    }catch(error) {
      throw new Error("Unable To Authnicate User");
    }
   }
}
export default Usermodel;
