var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('authors').select('id', 'first', 'last', 'bio', 'url').then(function(author_entries) {
    return res.render('authors', {
      authors: author_entries
    });
  });
});

router.get('/:id', function(req, res, next) {
  return knex('authors').select('id', 'first', 'last', 'bio', 'url').where({id: req.params.id}).then(function(author_entry) {
      return res.render('author', {
        author: author_entry});
  });
})

router.get('/new', function(req, res, next) {
  return res.render('new-author');
});

router.get('/:id/edit', function(req, res, next) {
  return res.render('index');
});

router.get('/:id/remove', function(req, res, next) {
  return res.render('index');
});

module.exports = router;
