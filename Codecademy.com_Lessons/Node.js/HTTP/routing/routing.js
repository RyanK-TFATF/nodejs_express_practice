/*
1. Our server is going to handle different types of requests. Using a switch statement, add a condition to match for incoming GET requests within the callback function of .createServer().
2. Let’s create a handler function for the GET requests that will be received. Using the ES6 arrow function notation, assign a function to a const variable called handleGetRequest. This function should take two arguments—req and res.
3. Now that we have a simple handler function, we can invoke it when GET requests are received. Return the handleGetRequest() function when HTTP method matches GET. Pass the req and res variables from the .createServer() callback into the handler function as the first and second arguments, respectively.
4. Now that we can handle GET requests, let’s turn our attention to the resource for which the GET request is being made. This distinction can be made using the pathname. Within the handleGetRequest() function, create a const variable called pathname, assigning it the value of the url from the request. Then, write an if statement to match the pathname of '/users'.
5. In the if statement that you just created, return an empty array as a response. Use the JSON.stringify() method to convert the array into a JSON string.
6. Run your code with node app.js, then click on the “Check Work” button.
*/
const http = require('http');

// Handle get request -- MOVED BASED ON SOLUTION
const handleGetRequest = (req, res) => {
  const pathname = req.url; // Changed from my original attempt. 

  if (pathname === '/users') {
    res.end(JSON.stringify([]));
  }
}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    default: // Added based on solution.
      throw new Error(`Unsupported request method: ${method}`); // Added based on solution.
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});