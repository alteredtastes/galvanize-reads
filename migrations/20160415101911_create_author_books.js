
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ab_intersect',
  function(table) {
    table.increments();
    table.int('authorID');
    table.string('bookID');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ab_intersect');
};
