const knex = require('../db/knex');

module.exports = function(authorID) {
  return knex('authors').select('id', 'first', 'last', 'bio', 'url').where(authorID)
}
