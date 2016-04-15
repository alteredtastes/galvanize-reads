var express = require('express');
var router = express.Router();

const knex = require('../db/knex');
const queries = require('../db');

router.get('/', function(req, res, next) {
  queries.getBooks().then(function(book_entries) {
    res.render('books',{
      titles: book_entries
    });
  });
});

router.get('/new', function(req, res, next) {
  queries.getAuthors().then(function(author_refs) {
    res.render('new-book', {
      authors: author_refs
    });
  });
});

router.get('/:id', function(req, res, next) {
  queries.getBook({
    id: req.params.id
  }).then(function(book_entry) {
    res.render('book', {
      title: book_entry
    });
  });
});

router.get('/:id/edit', function(req, res, next) {
  queries.getBook({
    id: req.params.id
  }).then(function(book_to_edit) {
    res.render('edit-book', {
      title: book_to_edit
    });
  });
});

router.get('/:id/remove', function(req, res, next) {
  queries.getBook({
    id: req.params.id
  }).then(function(book_entry) {
    res.render('delete-book', {
      title: book_entry
    });
  });
});

router.post('/', function(req, res, next) {
  var intersectID;
  var authorIDs = [];
  var reqBodyAuthors = JSON.parse(JSON.stringify(req.body.authors));

  if(typeof reqBodyAuthors === 'string') {
    authorIDs.push(reqBodyAuthors);
  } else {
    authorIDs = reqBodyAuthors;
  }
  console.log(authorIDs);
  for (id in authorIDs){
    
  }
});

router.post('/', function(req, res, next) {
  queries.insertBook([{
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    url: req.body.url
  }]).then(function() {
    res.redirect('/books');
    });
});

router.put('/:id', function(req, res, next) {
  queries.editBook({
    id: req.params.id
  },{
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    url: req.body.url
  }).then(function() {
    res.redirect('/books/' + req.params.id);
  });
});

router.delete('/:id', function(req, res, next) {
  queries.deleteBook({
    id: req.params.id
  }).then(function() {
    res.redirect('/books');
  });
});

module.exports = router;


//INSERT BOOK PAGE VALIDATION
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
