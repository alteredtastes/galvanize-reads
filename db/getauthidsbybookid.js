const knex = require('../db/knex');

module.exports = function(book_id) {
  return knex('ab_intersect').select('author_id').where({book_id: book_id});
}
