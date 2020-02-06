exports.seed = function(knex) {
  return knex("animals")
    .truncate()
    .then(function() {
      return knex("animals").insert([
        { name: "fox" },
        { name: "wolf" },
        { name: "bear" },
        { name: "leopard" },
      ])
    })
}