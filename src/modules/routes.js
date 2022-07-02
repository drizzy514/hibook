const express = require('express');
const router = express.Router()
const book = require("./book/book")
const category = require('./Category/category')
const authors = require('./authors/author')
const users = require('./sellBook/sellBook')

// category
router.post('/insertcategory', category.POST);
router.get('/categories', category.GET);
router.delete('/:id', category.DEL)

// book
router.post('/insert', book.POST );
router.get('/books', book.GET);
router.delete('/books/:bookId', book.DEL);

// author
router.post('/insertauthor', authors.POST)
router.get('/author', authors.GET)

// orders
router.post('/order', users.POST);
router.get('/orders', users.GET)

module.exports = router