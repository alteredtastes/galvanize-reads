const knex = require('../db/knex');

module.exports = function(refs) {
  return knex('ab_intersect').returning('id').insert(refs);
}
