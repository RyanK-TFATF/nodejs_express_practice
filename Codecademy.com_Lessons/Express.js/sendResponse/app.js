/*
Send the expressions array from your app.get() handler. Now that you have a complete route, you can test it out by reloading the browser window and clicking the ‘Refresh Expressions’ button on the machine.
*/

const express = require('express');
const app = express();
const { seedElements } = require('./utils');

// Serves Express Yourself website
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const expressions = [];
seedElements(expressions, 'expressions');

// Get all expressions
app.get('/expressions', (req, res, next) => {
  // console.log(req);
  res.send(expressions); // New Code Added 
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
