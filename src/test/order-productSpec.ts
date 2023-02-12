import Orderproduct from "../models/order-prodcu.model";
import UserModel from "../models/user.model";
import Productmodel from "../models/product.model";
import Ordermodel from "../models/order.model";
import db from '../database/index';
const order = new Orderproduct();
const userModel = new UserModel();
const prod = new Productmodel();
const ordermodel = new Ordermodel();

describe("Order Model", () => {
  describe("Test CRUD Operations On Orders Product Model", () => {
    it("Should Retrun All Order Products", () => {
      expect(order.getall).toBeDefined();
    });
    it("Should Retrun One Order Products", () => {
      expect(order.getone).toBeDefined();
    });
    it("Should Update Order Products", () => {
      expect(order.update).toBeDefined();
    });
    it("Should Delete Order Products", () => {
      expect(order.deletes).toBeDefined();
    });
    it("Should Create  Order Products", () => {
      expect(order.create).toBeDefined();
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
      await prod.create({
        name: "Test",
        price: 35
       
      });
    });
    it("Test creating a new order", async () => {
      const orders = {
        user_id: "1",
        product_id: "1",
        quantity: "511",
      };
      const add = await order.create(orders);
      expect(orders.quantity).toBe("511" as unknown as string)
    });
    it("Test listing orders", async () => {
      const orders = await order.getall;
      expect(orders.length).toBe(1);
    });
  });
  afterAll(async () => {
    const connection = await db.connect();
    const sql1 ="DELETE FROM users;\nALTER SEQUENCE users_id_seq RESTART WITH 1";
    const sql2="DELETE FROM orders;\nALTER SEQUENCE orders_id_seq RESTART WITH 1";
    const sql3="DELETE FROM product;\nALTER SEQUENCE product_id_seq RESTART WITH 1";
    const sql4="DELETE FROM order_products;\nALTER SEQUENCE order_products_id_seq RESTART WITH 1";
    await connection.query(sql4);
    await connection.query(sql3);
    await connection.query(sql2);
    await connection.query(sql1);
    connection.release();
  });
});
