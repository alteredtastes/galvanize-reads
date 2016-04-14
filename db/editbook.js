const knex = require('../db/knex');

module.exports = function(bookID, update) {
  return knex('books').where(bookID).update(update);
}
