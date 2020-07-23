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
const mongoose = require('mongoose');

// connect to 'solo-project' db in mongodb 
const MONGO_URI = 'mongodb://localhost/solo-project';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));


// Algorithm Collection Schema
const algorithmSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  // likes: {
  //   type: Number,
  //   required: false,
  // },
  body: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  // tests: {
  //   type: Array,
  //   required: false,
  // },
  // tags: {
  //   type: Array,
  //   required: false,
  // },
});

const Algorithm = mongoose.model('Algorithm', algorithmSchema);

// exports all the models in an object to be used in the controller
module.exports = { Algorithm };
