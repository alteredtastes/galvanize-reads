var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('authors').select('first', 'last', 'bio', 'url').then(function(author_entry) {
    return res.render('authors', {
      author: author_entry
    })
  })
})

module.exports = router;
