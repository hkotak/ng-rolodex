exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('users_id');
    table.string('username').notNullable();
    table.unique('username');
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.string('name').nullable();
    table.string('email').nullable();
    table.string('address').nullable();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
};