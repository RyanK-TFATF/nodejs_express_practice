/*
The url variable points to an API resource to load a user record. Add a path parameter to the value of the url variable to load the profile data for the user with an ID of 25.
Let’s load some of the user’s projects. Add /projects to the end of the URL from the above step. Then, add a query for the below two key/value pairs to the URL.

type key with the value of personal
month key with the value of january
*/ 

// My Code 
const http = require('http');

const url = 'http://example.com/users/25/projects?type=personal&month=january';

// Provided Code Below 
// Make a GET request with the URL and process the response.
http.get(url, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(data);
  });
});