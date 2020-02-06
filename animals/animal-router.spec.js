const supertest = require('supertest');
const router = require('./animal-router');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

// GET - /animals
test("get all animals", async () => {
  const res = await supertest(server.use(router)).get("/animals");

  // Status Code - unauthorized
  expect(res.status).toBe(400)

  // Data Format
  expect(res.type).toBe("application/json")
})

// POST - /animals
test("add a new animal", async () => {
  const res = await supertest(server.use(router))
      .post("/animals")
      .send({ name: "otter" });

  // Status Code - unauthorized
  expect(res.status).toBe(400)

  // Data Format
  expect(res.type).toBe("application/json")
})

// PUT - /animals/:id
test("update an animal", async () => {
  const res = await supertest(server.use(router))
      .put('/animals/1')
      .send({ name: "white fox" })

  // Status Code - unauthorized
  expect(res.status).toBe(400)

  // Data Format
  expect(res.type).toBe("application/json")
})

// DELETE - /animals/:id
test("remove an animal", async () => {
  const res = await supertest(server.use(router)).delete('/animals/2')

  // Status Code - unauthorized
  expect(res.status).toBe(400)

  // Data Format
  expect(res.type).toBe("application/json")
})