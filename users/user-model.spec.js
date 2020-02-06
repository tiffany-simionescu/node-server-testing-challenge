const userModel = require('./user-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

describe("users model", () => {

  test("find", async () => {
    const res = await userModel.find();
    expect(res.length).toBeGreaterThan(0);
  })

  test("findById", async () => {
    const res = await userModel.findById(1);
    expect(res.username).toBe("tiffany25")
  })

  test("add", async () => {
    await userModel.add({ username: "tiffany88", password: "123456" })
    const users = await db("users").select();
    expect(users).toHaveLength(2)
  })
})