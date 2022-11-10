const querystring = require('querystring');
const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';

const split = url.split('?');
const queryToParse = split[1];

console.log(queryToParse); 
const parsedQuery = querystring.parse(queryToParse);