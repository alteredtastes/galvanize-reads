var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

function books() {
  return knex('Authors');
}

module.exports = router;
