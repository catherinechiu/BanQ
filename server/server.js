// import node express framework
const express = require('express');
// init server
const app = express();
// define port
const PORT = 3000;


// import path module (included w/ node.js by default)
const path = require('path');

// // import bodyParser
// const bodyParser = require('body-parser');


// // CONNECT DATABASE
// // import mongoose library for mongoDB
// const mongoose = require('mongoose');
// // connect to corresponding db in mongodb 
// // mongoose.connect('mongodb://localhost/nodekb');
// mongoose.connect('mongodb://localhost/solo-project');
// // define db
// let db = mongoose.connection;

// // Check connection
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Check for DB errors
// db.on('error', (err) => {
//   console.log(err);
// });




// // Bring in Models
// // let Article = require('./models/algorithm');
// let Algorithm = require('./models/algorithm');
// const algorithm = require('./models/algorithm');



// Load View Engine
// app.set('views', path.join(__dirname, '../client/', 'views'));
// app.set('view engine', 'pug');

// // parse req.body
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());






// ROUTES

// // statically serve everything in the build folder on the route '/build
// if (process.env.NODE_ENV === 'production') {
//   app.use('/build', express.static(path.join(__dirname, '../build')));

//   // serve index.html on the route '/'
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
//   });
// }


// READ: Get Home Route

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  // serve index.html on the route '/'
  // send pug template
  // res.render('index');
  // send React app
  res.sendFile(path.join(__dirname, '../index.html'));



  // Algorithm.find({}, (err, algorithmData) => {
  //   if (err) {
  //     console.log('ERROR', err);
  //   } else {
  //     res.render('index', {
  //       title: 'Algorithms',
  //       algorithms: algorithmData,
  //     });
  //   };
  // });
});

// // CREATE: POST Algo Prompt Route
// app.post('/', (req, res) => {
//   // deconstruct values from req.body
//   const { title, author, body, difficulty, tests, tags } = req.body
//   let algorithm = new Algorithm();
//   algorithm.title = title;
//   algorithm.author = author;
//   algorithm.body = body;
//   algorithm.difficulty = difficulty;
//   algorithm.tests = tests;
//   algorithm.tags = tags;


//   algorithm.save((err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     else {
//       console.log('Submitted to DB!');
//       return;
//     }
//   });
// });


// // READ: GET Single Algorithm 
// app.get('/algorithm/:id', (req, res) => {
//   Algorithm.findById(req.params.id, (err, algorithmData) => {
//     res.render('algorithm', {
//       algorithm: algorithmData,
//     });
//   });
// });

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





// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));



// // update algo
// // delete algo 