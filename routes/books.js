var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('books').select('id', 'title', 'genre', 'description', 'url').then(function(book_entries) {
      return res.render('books',{
        titles: book_entries
      });
  });
});

router.get('/new', function(req, res, next) {
  return res.render('new-book');
});

router.get('/:id', function(req, res, next) {
  return knex('books').select('id', 'title', 'genre', 'description', 'url').where({id: req.params.id}).then(function(book_entry) {
      return res.render('book', {
        title: book_entry});
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
  // if(!(req.body.title && req.body.title.trim())) {
  //   errors.push('Your book needs a title!');
  // }
  //
  // if(!(req.body.genre && req.body.genre.trim())) {
  //   errors.push('Your book needs a genre!');
  // }
  //
  // if(!(req.body.description && req.body.description.trim())) {
  //   errors.push('Your book needs a description!');
  // }
  //
  // if(!(req.body.url && req.body.url.trim())) {
  //   errors.push('Your book needs a cover!');
  // }
  //
  // if(errors) {
  //   res.render('new-book', {
  //     errors: errors
  //   })
  // }

  return knex('books').insert([
    {title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    url: req.body.url}]).then(function() {
      res.redirect('/books');
  });
});

module.exports = router;
