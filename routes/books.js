var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('books').select('title', 'genre', 'description', 'url').then(function(book_entries) {
      return res.render('books', {title: book_entries});
  });
})

module.exports = router;
