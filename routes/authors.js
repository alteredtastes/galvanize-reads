var express = require('express');
var router = express.Router();

const knex = require('../db/knex');
const queries = require('../db')

router.get('/', function(req, res, next) {
  queries.getAuthors().then(function(author_entries) {
    res.render('authors', {
      authors: author_entries
    });
  });
});

router.get('/new', function(req, res, next) {
  res.render('new-author');
});

router.get('/:id', function(req, res, next) {
  queries.getAuthor({
    id: req.params.id
  }).then(function(author_entry) {
    res.render('author', {
      author: author_entry
    });
  });
});

  router.get('/:id/edit', function(req, res, next) {
    res.render('index');
  });

  router.get('/:id/remove', function(req, res, next) {
    queries.getAuthor({
      id: req.params.id
    }).then(function(author_entry) {
      res.render('delete-author', {
        author: author_entry
      });
    });
  });

router.post('/', function(req, res, next) {
  queries.insertAuthor([{
    first: req.body.first,
    last: req.body.last,
    bio: req.body.bio,
    url: req.body.url
  }]).then(function() {
    res.redirect('/authors');
    });
});

router.delete('/:id', function(req, res, next) {
  queries.deleteAuthor({
    id: req.params.id
  }).then(function() {
    res.redirect('/authors');
  });
});

module.exports = router;


// INSERT AUTHOR PAGE VALIDATION
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
//   res.render('new-author', {
//     errors: errors
//   })
// }
