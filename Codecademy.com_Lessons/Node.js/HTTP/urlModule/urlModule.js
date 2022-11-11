/*
1. First, let’s import the url module using require() and save it to a const variable called url.
2. Create a new instance of a URL object using the URL_TO_PARSE variable and assign it to a const variable called myUrl.
3. Extract the hostname from myUrl and assign it to a const variable called hostname.
4. Next, extract the path from myUrl and assign it to a const variable called pathname.
5. Finally, extract the query parameters from myUrl and assign it to a const variable called searchParams.
*/ 

const url = require('url');
const URL_TO_PARSE = 'https://www.example.com/p/a/t/h?prop1=value1&prop2=value2';

// My Code Below 
const myUrl = new URL(URL_TO_PARSE);
const hostname = myUrl.hostname;
const pathname = myUrl.pathname;
const searchParams = myUrl.searchParams; 