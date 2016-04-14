const knex = require('../db/knex');

module.exports = function(book) {
  return knex('books').insert(book);
}
