const fs = require('fs');
const path = require('path');

// let Algorithm = require('../models/algorithmModels');
const { Algorithm } = require('../models/algorithmModels');


const promptController = {};

promptController.getPrompts = (req, res, next) => {
  Algorithm.find({}, (err, algorithmData) => {
    if (err) {
      return next({
        log: 'promptController.getPrompts: ERROR: Error getting prompts data from database.',
        message: {
          err: 'Error occurred in promptController.getPrompts. Check server logs for more details.'
        },
      });
    } else {
      res.locals.algorithms = algorithmData;
      // console.log('res.locals', res.locals);
      res.sendFile(path.join(__dirname, '../../index.html'));
      return next();
    };
  });
}

promptController.postPrompt = (req, res, next) => {
  // deconstruct values from req.body
  const { title, author, likes, body, difficulty, tests, tags } = req.body
  Algorithm.create({
    title: title,
    author: author,
    likes: likes,
    body: body,
    difficulty: difficulty,
    tests: tests,
    tags: tags,
  })
  return next();
}

promptController.getSinglePrompt = (req, res, next) => {
  const algorithmId = req.params.id
  console.log('algorithmId', algorithmId)
  Algorithm.findById(algorithmId, (err, algorithmData) => {
    if (err) {
      return next({
        log: 'promptController.getSinglePrompt: ERROR: Error getting SINGLE prompt from database.',
        message: {
          err: 'Error occurred in promptController.getSinglePrompt. Check server logs for more details.'
        },
      });
    } else {
      console.log('algorithmData', algorithmData);
      res.locals.algorithm = algorithmData;
      return next();
    }
  });
};


module.exports = promptController;