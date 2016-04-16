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
  queries.getBooks().then(function(book_refs) {
    res.render('new-author', {
      titles: book_refs
    });
  });
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
  queries.getAuthor({
    id: req.params.id
  }).then(function(author_to_edit) {
    res.render('edit-author', {
      author: author_to_edit
    });
  });
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
  var intersectID;
  var bookIDs = [];
  var reqBodyBooks;

  if (req.body.books) {
    var reqBodyBooks = JSON.parse(JSON.stringify(req.body.books));
  }
  if(typeof reqBodyBooks === 'string') {
    bookIDs.push(reqBodyBooks);
  } else {
    bookIDs = reqBodyBooks;
  }
  queries.insertAuthor([{
    first: req.body.first,
    last: req.body.last,
    bio: req.body.bio,
    url: req.body.url
  }]).then(function(authID) {
    var promises = [];
    for (bookID in bookIDs) {
      promises.push(
      queries.insertRefs([{
        bookID: parseInt(bookID),
        authorID: parseInt(authID)
      }]))
    }
    Promise.all(promises).then(function() {
    res.redirect('/authors');
    });
  });
});

router.put('/:id', function(req, res, next) {
  queries.editAuthor({
    id: req.params.id
  },{
    first: req.body.first,
    last: req.body.last,
    bio: req.body.bio,
    url: req.body.url
  }).then(function() {
    res.redirect('/authors/' + req.params.id);
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
