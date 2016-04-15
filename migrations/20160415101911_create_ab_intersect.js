
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ab_intersect',
  function(table) {
    table.increments();
    table.integer('authorID');
    table.integer('bookID');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ab_intersect');
};
