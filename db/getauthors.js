const knex = require('../db/knex');

module.exports = function() {
  return knex('authors').select('id', 'first', 'last', 'bio', 'url').orderBy('id', 'ASC');
}
