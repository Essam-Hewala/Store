import supertest from "supertest";
import app from "../index";
const request = supertest(app);
describe("Test Server Express", () => {
  it("Get The / Endpoint", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});
