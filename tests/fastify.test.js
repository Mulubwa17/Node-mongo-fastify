// const request = require("supertest");
// const server = require("../server");
// const chai = require("chai");
// const user = require("../models/User");

// after(async () => {
//   console.log("Cleaning up test environment ...");
//   if (await user.db.dropDatabase()) {
//     console.log("Successful.");
//   } else {
//     console.log("Failed to clean up environment.");
//   }
// });

// let userId = "";

// describe("USERS API TESTS", (done) => {
//   it("POST /api/v1/user/new should create a new user", async () => {
//     const user = {
//       name: "Mulubwa",
//       email: "Mulubwac@gmail.com",
//       age: 26,
//     };
//     const response = await request(server).post("/api/v1/user/new").send(user);
//     userId = response.body._id;
//     console.log(userId);
//     chai.expect(response.status).to.equal(200);
//   });

//   it("GET /api/v1/users should return a list of users", async () => {
//     const response = await request(server).get("/api/v1/users").send();
//     chai.expect(response.status).to.equal(200);
//   });

//   it("GET /api/test/user/:userId should return one user", async () => {
//     const response = await request(server).get(`/api/v1/user/${userId}`);
//     chai.expect(response.status).to.equal(200);
//     console.log(response.body);
//   });

//   it("PUT /api/v1/user/:userId should update a user", async () => {
//     const user = {
//       name: "Simon",
//       email: "Mulubwac@gmail.com",
//       age: 27,
//     };
//     const response = await request(server)
//       .put(`/api/v1/user/${userId}`)
//       .send(user);
//     chai.expect(response.status).to.equal(200);
//   });

//   it("DELETE /api/v1/user/:userId should return one user", async () => {
//     const response = await request(server).delete(`/api/v1/user/${userId}`);
//     chai.expect(response.status).to.equal(200);
//   });
// });
