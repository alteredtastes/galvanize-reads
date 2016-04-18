const knex = require('../db/knex');

module.exports = function(id) {
  return knex('books').select('id', 'title', 'genre', 'description', 'url').where({id: id});
}
