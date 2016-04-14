const knex = require('../db/knex');

module.exports = function(authorID) {
  return knex('authors').select().where(authorID).del();
}
