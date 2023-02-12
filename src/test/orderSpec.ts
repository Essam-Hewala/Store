import Orderproduct from "../models/order-prodcu.model";
import UserModel from "../models/user.model";
import Productmodel from "../models/product.model";
import Ordermodel from "../models/order.model";
import db from '../database/index'
const order = new Orderproduct();
const userModel = new UserModel();
const prod = new Productmodel();
const ordermodel = new Ordermodel();
describe("Order Model", () => {
  describe("Test CRUD Operations On Orders Model", () => {
    it("Should Retrun All Order", () => {
      expect(ordermodel.getall).toBeDefined();
    });
    it("Should Retrun One Order", () => {
      expect(ordermodel.getone).toBeDefined();
    });
    it("Should Update Order", () => {
      expect(ordermodel.update).toBeDefined();
    });
    it("Should Delete Order", () => {
      expect(ordermodel.deletes).toBeDefined();
    });
    it("Should Create  Order", () => {
      expect(ordermodel.create).toBeDefined();
    });
  });
  describe("Orders models Testing", () => {
    beforeAll(async () => {
      await userModel.create({
        username: "Essam_Elsyed",
        first_name: "Essam",
        last_name: "Sayed",
        password: "A_123456",
      });
    });
    it("Test creating a new order", async () => {
      const orders = {
        user_id: '1',
        status: 1,
      };
      const add = await ordermodel.create(orders);
      expect(orders.status).toBe(1)
    });
    it("Test listing orders", async () => {
      const orders = await ordermodel.getall;
      expect(orders.length).toBe(1);
    });
  });
  afterAll(async () => {
    const connection = await db.connect();
    const sql1 ="DELETE FROM users;\nALTER SEQUENCE users_id_seq RESTART WITH 1";
    const sql2="DELETE FROM orders;\nALTER SEQUENCE orders_id_seq RESTART WITH 1";
    await connection.query(sql2);
    await connection.query(sql1);
    connection.release();
  });
});
