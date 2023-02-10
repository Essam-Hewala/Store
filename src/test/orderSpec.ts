import Ordermodel from "../models/order.model";
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
});
