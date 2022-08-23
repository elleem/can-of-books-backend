'use strict';

const Book = require('../models/books');

const getBooks = async (request, response, next) => {
  try {
    // is I pass in a empty object, that tells Mongoose to get ALL the documents from the database
    const book = await Book.find({});
    response.status(200).send(book);
    // const noData = require('./nodata.js'); 
    // response.send(noData);

  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getBooks;
