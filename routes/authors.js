var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('authors').select('id', 'first', 'last', 'bio', 'url').then(function(author_entries) {
    return res.render('authors', {
      authors: author_entries
    })
  })
})

router.get('/:id', function(req, res, next) {
  return knex('authors').select('first', 'last', 'bio', 'url').where({id: req.params.id}).then(function(author_entry) {
      return res.render('author', {
        author: author_entry});
  });
})

module.exports = router;
