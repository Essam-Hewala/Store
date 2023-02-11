import Productmodel from "../models/product.model";
import db from "../database/index"
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
  describe("Products models Testing", () => {
    const product = {
      name: "Product",
      price: 25,
    };
    it("Create a new product ", async () => {
      const Prod = await productmodel.create(product);
      expect(Prod.name).toBe("Product");
      expect(Prod.price).toBe(25);
    });

    it("Get single product model", async () => {
      const Prod = await productmodel.getone(1 as unknown as string);
      expect(Prod.name).toBe("Product");
    });

    it("Testing list all products", async () => {
      const Prod = await productmodel.getall;
      expect(Prod.length).toBe(1);
    });
  });
});
