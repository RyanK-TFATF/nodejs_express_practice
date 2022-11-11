/*
Import the http module using require(). Save the module as a const variable called http.
Create a simple server using the .createServer() method and assign it to a const variable called server.
Using the server object, make your newly created server listen on port 4001.
Inside the callback function of the .createServer() method, have the server return a response of 'Hello World' using the .end() method.
*/ 

// My Code Below 
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.listen(4001, () => {
  
});