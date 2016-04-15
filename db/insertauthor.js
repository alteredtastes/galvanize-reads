const knex = require('../db/knex');

module.exports = function(author) {
  return knex('authors').returning('id').insert(author);
}
