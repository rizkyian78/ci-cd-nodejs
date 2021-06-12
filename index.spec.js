const app = require("./server"); // Link to your server file
const supertest = require("supertest");
// const mongoose = require("mongoose");
const request = supertest(app);
const sinon = require("sinon");

beforeEach(async () => {});

it("Call the endpoint landing", (done) => {
  request.get("/").then((res) => {
    expect(res.statusCode).toBe(200);
    done();
  });
});

it("Call the endpoint landing", (done) => {
  request.get("/youtube").then((res) => {
    expect(res.statusCode).toBe(200);
    done();
  });
});

// it("Call the Cat Get ALl endpoint", (done) => {
//   request.get("/cat").then((res) => {
//     expect(res.statusCode).toBe(200);
//     done();
//   });
// });
