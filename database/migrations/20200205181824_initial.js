
exports.up = async function(knex) {
  await knex.schema.createTable("animals", animals => {
    animals
      .increments();

    animals
      .string("name", 128)
      .notNullable();
  });

  await knex.schema.createTable("users", users => {
    users
      .increments();

    users
      .string("username", 128)
      .notNullable()
      .unique();

    users 
      .string("password", 128)
      .notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users")
  await knex.schema.dropTableIfExists("animals")
};
