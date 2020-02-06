const supertest = require('supertest');
const router = require('./user-router');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

// POST - /users/register
test("add a new user", async () => {
  const res = await supertest(server.use(router))
      .post("/users/register")
      .send({ username: "tiffany87", password: "123456" });

  // Status Code - unauthorized
  expect(res.status).toBe(500)

  // Data Format
  expect(res.type).toBe("application/json")
})

// POST - /users/login
test("login", async () => {
  const res = await supertest(server.use(router))
      .post("/users/login")
      .send({ username: "tiffany87", password: "123456" });

  // Status Code - unauthorized
  expect(res.status).toBe(401)

  // Data Format
  expect(res.type).toBe("application/json")
})

// GET - /users
test("get all users", async () => {
  const res = await supertest(server.use(router)).get('/users')

  // Status Code - unauthorized
  expect(res.status).toBe(400)

  // Data Format
  expect(res.type).toBe("application/json")
})