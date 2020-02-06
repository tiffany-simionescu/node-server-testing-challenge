const db = require('../database/dbConfig');

module.exports = {
  add,
  find,
  findById,
  remove, 
  update
};

function find() {
  return db("animals")
    .select("id", "name");
}

function findById(id) {
  return db("animals")
    .where({ id })
    .first();
}

async function add(animal) {
  const [id] = await db("animals").insert(animal);

  return findById(id);
} 

function update(id, changes) {
  return db("animals")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? db("animals").get(id) : null));
}

function remove(id) {
  return db("animals")
    .where("id", id)
    .del();
}