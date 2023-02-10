import Usermodel from "../models/user.model";
import db from "../database";
import user from "../types/users.type";
const usermodel = new Usermodel();
describe("Authnticate Users Module", () => {
  describe("Test Method Runing", () => {
    it("Should Contain User Authincation", () => {
      expect(usermodel.authenticate).toBeDefined();
    });
  });
});
describe("Test Auth User", () => {
  const user = {
    username: "Essam_Hewala",
    first_name: "Essam",
    last_name: "Sayed",
    password: "A_123456",
  } as user;
  beforeAll(async () => {
    const createuser = await usermodel.create(user);
    user.id = createuser.id;
  });
  afterAll(async () => {
    const connection = await db.connect();
    const sql = "delete from users";
    await connection.query(sql);
    connection.release();
  });
  it("It Should Return The User", async () => {
    const authuser = await usermodel.authenticate(
      user.username as string,
      user.password as string
    );
    expect(authuser?.username).toBe(user.username);
    expect(authuser?.first_name).toBe(user.first_name);
    expect(authuser?.last_name).toBe(user.last_name);
  });
  it("Should Return Wrong Data", async () => {
    const authuser = await usermodel.authenticate(
      "Mohamed Ahmed",
      "Wrong Password"
    );
    expect(authuser).toBe(null);
  });
});
