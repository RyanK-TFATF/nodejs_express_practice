/*
1. Inside the handleGetRequest() function, set the status code on the server response to the appropriate status code indicating success.
2. Unlike the GET requests, the POST requests are failing. In the POST request handler code, set the status code on the server response to the appropriate status code indicating an internal server error.
3. Run your code with node app.js, then click on the “Check Work” button.
*/

const http = require('http');

const handleGetRequest = (req, res) => {
  // Set GET status code here
  res.statusCode = 200; // My Code 
  return res.end(JSON.stringify({ data: [200] }));
}

const handlePostRequest = (req, res) => {
  // Set POST status code here
  res.statusCode = 500; // My Code 
  return res.end("Unable to create record");
}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    case 'POST':
      return handlePostRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});