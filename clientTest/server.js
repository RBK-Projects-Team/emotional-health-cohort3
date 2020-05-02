const express = require('express'),
      jwt = require('jsonwebtoken'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      fs = require('fs'),
      mongoose = require('mongoose');

// db Models
const Students = require('./db/StudentModel');
const Survey = require('./db/SurveyModel');

mongoose.connect("mongodb://localhost:27017/emotional-db-ctn3").then(
  () => {console.log('Database connection is successful') },
  err => { console.log('Error when connecting to the database'+ err)}
);

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API.'
  })
})

app.post('/login', (req, res) => {
    // students.json is a file for client side test
  const studentDB = fs.readFileSync('./db/students.json')
  const studentInfo = JSON.parse(studentDB)
  if (
    req.body &&
    req.body.email === studentInfo.email &&
    req.body.password === studentInfo.password
  ) {
    const token = jwt.sign({ studentInfo }, 'the_secret_key')
    // In a production app, you'll want the secret key to be an environment variable
    res.json({
      token,
      email: studentInfo.email,
      name: studentInfo.name
    })
  } else {
    res.sendStatus(400)
  }
})

app.post('/submit', (req, res) => {
  console.log("#####################")
  console.log(req.body)
  console.log("#####################")
  // Check if name and emotion exist and not empty
  if (req.body.token && req.body.emotion){
  console.log(req.body.token)
  console.log(req.body.emotion)
  // ToDo :
  // Sumbit only the name and emotion ( avoid any extra fields)
  // Student should submit only 2 times/day
  var survey = new Survey(req.body);
  survey.save().then( survey => { // if save success return 200 with message
   res.status(200).json({'message': 'Survey successfully added '});
   })
   .catch(err => { // catch if error while saving to database
    res.status(400).send('Error when saving to database');
   });

  }else{ // if name and emotion empty return 400 with error message
    res.status(400).send('Error Missing Name and Emotion');
  }

})

// MIDDLEWARE
function verifyToken (req, res, next) {
  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(401)
  }
}

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
