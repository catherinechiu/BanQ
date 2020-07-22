/****** DATABASE SCRIPT CHEAT SHEET ******/


// Database: nodekb
// create database: use <db>
// list databases: show dbs 
// Collection: Articles
// create collection in current db: db.createCollection('<collection-name>');
// show collections
// Models: Articles 
// add object into Articles Model


/* 
db.articles.insert({
  "title": "Article Three",
  "author": "Catherine",
  "body": "This is article three"
})

db.algorithms.insert({
  "title": "TWO-SUM",
  "author": "Catherine",
  "likes": 7,
  "body": "This is the algo body.",
  "difficulty": "warm-up",
  "tests": ['algo test 1', 'algo test 2', 'algo test 3'],
  "tags": ['pattern', 'recursion', 'permutation']
})
*/


// clear mongo shell: cls 

// display articles
// db.articles.find().pretty()


/****** DATABASE SCRIPT CHEAT SHEET ******/


// import mongoose (library for MongoDB)
let mongoose = require('mongoose');


// Algorithm Collection Schema
let algorithmSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: false,
  },
  body: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  tests: {
    type: Array,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
});

// store algorithms collection in variable
let Algorithm = module.exports = mongoose.model('Algorithm', algorithmSchema);