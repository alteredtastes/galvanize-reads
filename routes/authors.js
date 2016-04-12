var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('authors').select('first', 'last').then(function(authorname) {
    return res.render('authors', {
      author: authorname
    })
  })
})

module.exports = router;
