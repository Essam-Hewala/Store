import Usermodel from "../models/user.model";
import user from "../types/users.type"
import db from "../database/index"
import supertest from "supertest";
import app from "../index";
const usermode = new Usermodel();
const request = supertest(app);
let token = "";
describe("Test API Endpoint",()=>{
const user ={
  username :"Essam_Elsayed" ,
  first_name :"Essam",
  last_name : "Hewala",
  password:"A_123456"
} as user ;
beforeAll(async ()=>{
const createuser =  await usermode.create(user);
user.id = createuser.id
});
afterAll(async ()=>{
const connection = await db.connect();
const sql = "delete from users";
await connection.query(sql);
connection.release();
});
describe("Test Routes",()=>{
it("should be able to auth and get token",async ()=>{
const res = await request
        .post("/operations/users/auth")
        .set("Content-Type", "application/json")
        .send({
          username :"Essam_Elsayed" ,
          password:"A_123456"
        });
        expect(res.status).toBe(200);
        const {id,username,token:usertoken} = res.body.data;
        expect(id).toBe(user.id);
        expect(username).toBe(user.username);
        token = usertoken;
});
it("should be Fail to auth and Cannot get token",async ()=>{
  const res = await request
          .post("/operations/users/auth")
          .set("Content-Type", "application/json")
          .send({
            username :"Wrong_Essam" ,
            password:"A_123456777"
          });
          expect(res.status).toBe(401);
  });
}); 
  describe("Test Crud Opeation With Routes",()=>{
    it("Should List  Users",async ()=>{
    const res = await request
          .get("/operations/users")
          .set("Content-Type", "application/json")
          .set("Authorization",`Bearer ${token}`);
      expect (res.status).toBe(200);
    });
});
describe("Testing Products Endpoints", () => {
  it("Testing /create product Endpoint ", async () => {
    const res = await request
      .post("/operations/product")
      .set("Content-Type", "application/json")
      .set("Authorization",`Bearer ${token}`)
      .send({
        name: "Test",
        price: 300
      });
      expect (res.status).toBe(200);
      const {name} = res.body.data;
      expect(name).toBe("Test");
  });
  it("Testing /products Endpoint [GET]", async () => {
    const res = await request.get("/operations/product");
    expect(res.status).toBe(200);
  });

  it("Testing /product/:id Endpoint [GET]", async () => {
    const res = await request.get("/operations/product/1");
    expect(res.status).toBe(200);
  });
});
describe("Testing Orders endpoints", () => {
  it("Testing /create_order Endpoint [POST]", async () => {
    const res = await request
      .post("/operations/op")
      .set("Content-Type", "application/json")
      .set("Authorization",`Bearer ${token}`)
      .send({
        user_id: 1,
        product_id: 1,
        quantity: 20,
      });
      expect(res.status).toBe(200);
      const {quantity} = res.body.data;
    expect(quantity).toBe(20);
  });

  it("Testing /order/:id/delete_order Endpoint [DELETE]", async () => {
    const res = await request
      .delete("/operations/op/1")
      .set("Content-Type", "application/json")
      .set("Authorization",`Bearer ${token}`)
    expect(res.status).toBe(200);
  });
});
});