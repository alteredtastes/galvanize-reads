const knex = require('../db/knex');

module.exports = function(bookID) {
  return knex('books').select().where(bookID).del();
}
