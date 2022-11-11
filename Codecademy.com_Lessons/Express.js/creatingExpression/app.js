/*
Create a POST /expressions route. It should send create and add a new expression to the expressions array if it is a valid new expression (meaning it has an emoji and name key). 
It should send back the new element with a 201 status code if it is valid, and it should send a 400 status code if the object is not valid.

You can use the createElement(elementType, objectToCreate) helper function to create a valid expression. 
The first argument is the type of element, so it should be 'expressions' in this case. The second argument should be the query object with an emoji and a name property. This function will return false if the objectToCreate does not contain all necessary key-value pairs, and it will return the newly-created element if object to create is valid. It does not add the created element to any arrays, you will need to do so yourself.
*/
const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements, createElement } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

// Solution Provided 
app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
