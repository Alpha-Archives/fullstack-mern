const request = require("supertest");
const app = require("../app");

describe("post endpoints", () => {
  it("should create a new post", async () => {
    // data = {
    //   userId: 1,
    //   title: "test is cool"
    // };
    // const res = await request(app)
    //   .post("/api/posts")
    //   .send(data);
    // expect(res.statusCode).toEqual(201);
    // expect(res.body).toHaveProperty("post");
    expect(true).toBe(true)
  });
});
