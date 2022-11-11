/*
Create a GET /expressions/:id get route that you will use to send back a single expression. 
You can use req.params object and the pre-written helper function getElementById(id, array) to find the correct expression before sending it back.

For instance, to find ID 560 from expressions, you would call getElementById(560, expressions);. 
This function returns the element object if it exists and undefined if it does not.
*/

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

/*
app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});
*/

app.get('/expressions/:id', (req, res, next) => {
    const foundExpression = getElementById(req.params.id, expressions);
    res.send(foundExpression);
  });

// Add a new call to app.get('/expressions/:id') here
app.get('/expressions/:id', (req, res, next) => {
  console.log(req.params);
  res.send(expressions[req.params.id]);
}); 

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
