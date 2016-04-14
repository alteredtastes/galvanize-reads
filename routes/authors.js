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

router.get('/new', function(req, res, next) {
  return res.render('new-author');
});

router.get('/:id', function(req, res, next) {
  return knex('authors').select('id', 'first', 'last', 'bio', 'url').where({id: req.params.id}).then(function(author_entry) {
      return res.render('author', {
        author: author_entry});
  });
})

router.get('/:id/edit', function(req, res, next) {
  return res.render('index');
});

router.get('/:id/remove', function(req, res, next) {
  return res.render('index');
});

router.post('/', function(req, res, next) {
  // var errors = [];
  //
  // if(!(req.body.first && req.body.first.trim())) {
  //   errors.push('Your author needs a first name!');
  // }
  //
  // if(!(req.body.last && req.body.last.trim())) {
  //   errors.push('Your author needs a last name!');
  // }
  //
  // if(!(req.body.bio && req.body.bio.trim())) {
  //   errors.push('Your author needs a bio!');
  // }
  //
  // if(!(req.body.url && req.body.url.trim())) {
  //   errors.push('Your author needs a portrait!');
  // }
  //
  // if(errors) {
  //   return res.render('new-author', {
  //     errors: errors
  //   })
  // }

  return knex('authors').insert([
    {first: req.body.first,
    last: req.body.last,
    bio: req.body.bio,
    url: req.body.url}]).then(function() {
      res.redirect('/authors');
  });
});

module.exports = router;
