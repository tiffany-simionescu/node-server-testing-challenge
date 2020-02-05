// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/dev.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './database/seeds'
    }
  },
};
