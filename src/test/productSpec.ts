import Productmodel from "../models/product.model";
const productmodel = new Productmodel();
describe("Products Model", () => {
  describe("Test CRUD Operations On Product Model", () => {
    it("Should Retrun All Product", () => {
      expect(productmodel.getall).toBeDefined();
    });
    it("Should Retrun One Product", () => {
      expect(productmodel.getone).toBeDefined();
    });
    it("Should Update Product", () => {
      expect(productmodel.update).toBeDefined();
    });
    it("Should Delete Product", () => {
      expect(productmodel.deletes).toBeDefined();
    });
    it("Should Create  Product", () => {
      expect(productmodel.create).toBeDefined();
    });
  });
});
