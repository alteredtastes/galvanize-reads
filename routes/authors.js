var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

function books() {
  return knex('Authors');
}

router.get('/', function(req, res, next) {
  res.render('authors', {authors: 'author!'});
})

module.exports = router;
