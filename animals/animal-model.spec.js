const animalModel = require('./animal-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

describe("animal model", () => {

  test("find", async () => {
    const res = await animalModel.find();
    expect(res.length).toBeGreaterThan(0);
  })

  test("add", async () => {
    await animalModel.add({ name: "dog" })
    const animals = await db("animals").select();
    expect(animals).toHaveLength(5)
  })

  test("findById", async () => {
    const res = await animalModel.findById(2);
    expect(res.name).toBe("wolf")
  })

  test("update", async () => {
    await animalModel.update(2, { name: "grey wolf"})
    const animal = await animalModel.findById(2)
    expect(animal.name).toBe("grey wolf");
  })

  test("remove", async () => {
    await animalModel.remove(5)
    const animals = await animalModel.find()
    expect(animals).toHaveLength(4)
  })
})