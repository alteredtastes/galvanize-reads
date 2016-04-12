var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

function books() {
  return knex('Books');
}

router.get('/', function(req, res, next) {
  res.render('books', {books: 'books!'});
})

module.exports = router;
