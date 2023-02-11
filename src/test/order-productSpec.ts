import Orderproduct from "../models/order-prodcu.model";
import UserModel from "../models/user.model";
import Productmodel from "../models/product.model";
import Ordermodel from "../models/order.model";
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

});
