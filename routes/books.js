var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('books').select('id', 'title', 'genre', 'description', 'url').then(function(book_entries) {
      return res.render('books', {titles: book_entries});
  });
})

router.get('/:id', function(req, res, next) {
  return knex('books').select('title', 'genre', 'description', 'url').where({id: req.params.id}).then(function(book_entry) {
      return res.render('book', {
        title: book_entry});
  });
})

module.exports = router;
