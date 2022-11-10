const http = require('http');

// Creates server instance
const server = http.createServer((req, res) => {
  // Write server code here
  const { method } = req;
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
  }
});

const handleGetRequest = (req, res) => {

};

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});