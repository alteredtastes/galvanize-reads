const knex = require('../db/knex');

module.exports = function(authorID, update) {
  return knex('authors').where(authorID).update(update);
}
