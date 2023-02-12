import Usermodel from "../models/user.model";
import db from "../database";
import user from "../types/users.type";
const usermodel = new Usermodel();
describe("User Model", () => {
  describe("Test CRUD Operations", () => {
    it("Should Retrun All Users", () => {
      expect(usermodel.getall).toBeDefined();
    });
    it("Should Retrun One User", () => {
      expect(usermodel.getone).toBeDefined();
    });
    it("Should Update User", () => {
      expect(usermodel.update).toBeDefined();
    });
    it("Should Delete Data", () => {
      expect(usermodel.deletes).toBeDefined();
    });
    it("Should Create  User", () => {
      expect(usermodel.create).toBeDefined();
    });
  });
  describe("Users models functionality", () => {
    const user = {
      username: "Essam_Elsayed",
      first_name: "Essam",
      last_name: "Sayed",
      password: "A_123456",
    };
    it("Testing Create User model", async () => {
      const secondUser = {
        username: "user",
        first_name: "test",
        last_name: "last",
        password: "A_123456",
      };
      const createdUser = await usermodel.create(secondUser);
      expect(createdUser.username).toBe("user");
      expect(createdUser.first_name).toBe("test");
      expect(createdUser.last_name).toBe("last");
    });

    it("testing Show users model", async () => {
      const showUsers = await usermodel.getone("1");
      expect(showUsers.username).toBe("user");
      expect(showUsers.first_name).toBe("test");
      expect(showUsers.last_name).toBe("last");
    });

  });
  afterAll(async () => {
    const connection = await db.connect();
    const sql1 ="DELETE FROM users;\nALTER SEQUENCE users_id_seq RESTART WITH 1";
    await connection.query(sql1);
    connection.release();
  });
});
