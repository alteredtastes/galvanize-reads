const knex = require('../db/knex');

module.exports = function(authIDs) {
  var promises = [];
  for (var i = 0; i < authIDs.length; i++) {
    promises.push(
     knex('authors').select('id', 'first', 'last', 'bio', 'url').where({id: authIDs[i]}));
  }
  return Promise.all(promises);
};
