const knex = require('../db/knex');

module.exports = function(authIDArray) {
  var promises = [];
  for (var i = 0; i < authIDArray.length; i++) {
    promises.push(
      knex('authors').select('id', 'first', 'last', 'bio', 'url').where({id: authIDArray[i].id}));
  }
  return Promise.all(promises);
};
