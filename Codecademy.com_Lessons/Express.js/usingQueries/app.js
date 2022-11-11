/*
Use req.query to update the proper element in the expressions array.
We’ve imported a helper function from /utils.js to help with this task.
You can use the updateElement() helper function in your PUT /expressions/:id route.
It takes three arguments:
    id (the ID number of the element)
    queryArguments (the new, updated expression object from req.query)
    elementList (the array which contains the element to update)
updateElement() updates that specific element in the elementList array (you’ll pass in the expressions array), and then returns the updated element.
Be sure to check that an expression with the id you provide exists in the expressions array (getIndexById() can help)!
*/

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
  seedElements } = require('./utils');

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

// Provided Solution Used :( 
app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
