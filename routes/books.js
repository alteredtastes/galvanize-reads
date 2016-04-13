var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('books').select('id', 'title', 'genre', 'description', 'url').then(function(book_entries) {
      return res.render('books', {titles: book_entries});
  });
});

router.get('/:id', function(req, res, next) {
  return knex('books').select('id', 'title', 'genre', 'description', 'url').where({id: req.params.id}).then(function(book_entry) {
      return res.render('book', {
        title: book_entry});
  });
})

router.get('/new', function(req, res, next) {
  return res.render('new-book');
});

router.get('/:id/edit', function(req, res, next) {
  return res.render('index');
});

router.get('/:id/remove', function(req, res, next) {
  return res.render('index');
});

module.exports = router;
