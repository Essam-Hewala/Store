import Orderproduct from "../models/order-prodcu.model";
const order = new Orderproduct();
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
});
