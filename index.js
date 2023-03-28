// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

//firebase
const functions = require("firebase-functions");
const admin = require('firebase-admin');
const serviceAccount = require('./arduinocontrolpage-firebase-adminsdk-50uhx-87445b41e4.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://arduinocontrolpage-default-rtdb.europe-west1.firebasedatabase.app/'
});


// Initialize express and define a port
const app = express()

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())
// Start express on the defined port//

//...
app.use(bodyParser.json())
app.post("/hook", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important

  const database = admin.database();
  const ref = database.ref('test/int');

  ref.set(1);


})
//...