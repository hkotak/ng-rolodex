exports.up = function (knex, Promise) {
  return knex.schema.createTable('contacts', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.string('address').nullable();
    table.string('mobile').nullable();
    table.string('work').nullable();
    table.string('home').nullable();
    table.string('email').nullable();
    table.string('twitter').nullable();
    table.string('instagram').nullable();
    table.string('github').nullable();
    table.integer('created_by').unsigned().notNullable();
    table.foreign('created_by').references('users_id').inTable('users');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contacts')
};