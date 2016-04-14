const knex = require('../db/knex');

module.exports = function(bookID) {
  return knex('books').select('id', 'title', 'genre', 'description', 'url').where(bookID);
}
