// import node express framework
const express = require('express');
// init server
const app = express();
// define port
const PORT = 3000;


// import path module (included w/ node.js by default)
const path = require('path');

// import bodyParser
const bodyParser = require('body-parser');


const promptController = require('./controllers/promptController');

// parse req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Production Mode vs Development Mode: statically serve everything in the build folder on the route '/build
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

// ROUTES

// READ: Get Home Route
// serve index.html on the route '/'
app.get('/', (req, res, next) => {
  console.log('Received get request to home route.');
  res.status(200).sendFile(path.join(__dirname, '../index.html'))
});

// app.get('/add', (req, res, next) => {
//   console.log('Received get request to add route.');
//   res.status(200).sendFile(path.join(__dirname, '../client/components/PostAlgo.jsx'))
// });
// 

app.get('/prompts', promptController.getPrompts, (req, res, next) => {
  res.status(200).json(res.locals.algorithms);
})

// CREATE: POST Algo Prompt Route
app.post('/add', promptController.postPrompt, (req, res, next) => {
  res.redirect(200, '/')
});


// READ: GET Single Algorithm 
app.get('/algorithm/:id', promptController.getSinglePrompt, (req, res, next) => {
  res.status(200)
});

// // READ: GET Edit Form for Single Algorithm
// app.get('/algorithm/edit/:id', (req, res) => {
//   Algorithm.findById(req.params.id, (err, algorithmData) => {
//     console.log('found ID:', req.params.id);
//     // render view file, then pass payload so view can dynamically render using declared variables
//     res.render('edit_algorithm', {
//       title: algorithmData.title,
//       algorithm: algorithmData,
//     });
//   });
// });

// // UPDATE: POST Edit Single Algorithm (change to put?)
// app.post('/algorithm/edit/:id', (req, res) => {
//   // deconstruct values from req.body
//   const { title, author, body, difficulty, tests, tags } = req.body
//   // init empty object to store updated data 
//   let algorithm = {};
//   algorithm.title = title;
//   algorithm.author = author;
//   algorithm.body = body;
//   algorithm.difficulty = difficulty;
//   algorithm.tests = tests;
//   algorithm.tags = tags;

//   // store algo _id in query variable
//   let query = { _id: req.params.id }
//   // call update on Algorithm collection, passing in unique selector, updated object,
//   // callback to be invoked after update is complete
//   Algorithm.updateOne(query, algorithm, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.redirect('/');
//     }
//   });
// });


// // DELETE:
// app.delete('/algorithms/edit/:id', (req, res) => {
//   // store algo _id in query variable
//   let query = { _id: req.params.id };

//   Algorithm.deleteOne(query, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(200).send('Success');
//   })
// })


// // // Add Route for Solutions
// // app.get('/algorithms/add', (req, res) => {
// //   res.render('algorithms', {
// //     title: 'Add Algorithm'
// //   });
// // });


// catch-all route handler for any requests to an unknown route
// app.use('*', (req, res) => {
//   console.log('Unknown route!')
//   res.sendStatus(404)
// });


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'), function (err) { //for no 404 error w/ react router
    if (err) {
      res.status(500).send(err)
    }
  })
})


// Start Server
app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));



// // update algo
// // delete algo 

module.exports = app;