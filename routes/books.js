var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('books').select('title').then(function(booknames) {
      return res.render('books', {title: booknames});
  });
})

module.exports = router;
