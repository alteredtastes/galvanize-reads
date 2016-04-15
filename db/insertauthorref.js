const knex = require('../db/knex');

module.exports = function(authorID, bookID) {
  return knex('ab_intersect').insert(authorID, bookID);
}
