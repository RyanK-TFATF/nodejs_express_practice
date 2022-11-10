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