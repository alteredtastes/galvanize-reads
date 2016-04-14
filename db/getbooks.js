const knex = require('../db/knex');

module.exports = function() {
  return knex('books').select('id', 'title', 'genre', 'description', 'url');
}
