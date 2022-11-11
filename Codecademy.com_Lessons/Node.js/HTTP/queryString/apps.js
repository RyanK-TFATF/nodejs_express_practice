/*
1. Import the querystring module using require() and save it to a const variable called querystring.
2. Isolate the query string from the url variable using the .split() method. Assign the resulting query string to a const variable called queryToParse.
3. Next, parse the isolated query string into an object of key/value pairs, assigning it to a const variable called parsedQuery.
4. Let’s add an extra property to the parsedQuery object called exercise, assigning it a value of 'querystring'.
5. Then, convert the parsedQuery object back into an encoded query string, assigning the value to a const variable named modifiedQueryString.
*/

const querystring = require('querystring');
const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';

/* Original Attempt 
const split = url.split('?');
const queryToParse = split[1];
*/ 
const queryToParse = url.split('?')[1];
console.log(queryToParse); 

const parsedQuery = querystring.parse(queryToParse);

/* Original Attempt 
const addQuery = {"exercise": querystring};
const modifiedQueryString = parsedQuery + querystring.stringify(addQuery);
*/ 

parsedQuery.exercise = 'querystring'; // How / Why does this add to the parsedQuery?
const modifiedQueryString = querystring.stringify(parsedQuery);
