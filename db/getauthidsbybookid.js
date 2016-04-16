const knex = require('../db/knex');

module.exports = function(bookID) {
  return knex('ab_intersect').select('authorID').where({bookID: bookID});
}
