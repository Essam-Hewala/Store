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
});
