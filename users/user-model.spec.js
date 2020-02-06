const userModel = require('./user-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

describe("users model", () => {

  test("add", async () => {
    await userModel.add({ username: "tiffany88", password: "123456" })
    const users = await db("users").select();
    expect(users).toHaveLength(2)
  })

  test("findById", async () => {
    const res = await userModel.findById(1);
    expect(res.username).toBe("tiffany25")
  })
})