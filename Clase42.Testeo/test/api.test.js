import supertest from "supertest";
import { expect } from "chai";
import userFactory from "./factory/user.factory.js";

let request;

describe("Test sobre API REST FULl", () => {
  before(() => {
    request = supertest("http://localhost:3000");
  });

  describe("- POST /api/user", () => {
    it("Deberia devolver status 200", async () => {
      const userToCreate = userFactory.generateUser();
      const response = await request.post("/api/user").send(userToCreate);

      expect(response.status).to.eql(200);
    });
  });

  describe("- GET /api/user", () => {
    it("Deberia devolver status 200", async () => {
      const response = await request
        .get("/api/user")
        .set({ userId: "633e1edec50c43141e60dc7f" });

      expect(response.status).to.eql(200);
      expect(response.body.data).to.keys("name", "email", "id");
    });
  });

  describe("- GET Unkown", () => {
    it("Deberia devolver status 404", async () => {
      const response = await request.get("/asdasds");

      expect(response.status).to.eql(404);
    });
  });
});
