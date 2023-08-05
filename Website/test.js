const express = require('express');
const app = express();

// Set up CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/index1.html'); // Replace with your actual frontend URL
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Handle the request
app.get('https://script.google.com/macros/s/AKfycbzKvlXm6t8Bv12oPf8h7QxVHnnKrQGM97Qzk4S16oGZesjWZTS8tx3Vsquk5Ahci5hv/exec', (req, res) => {
  // Your logic to handle the request goes here
  // Send the response with appropriate headers
  res.header('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({ message: 'Success' }));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
