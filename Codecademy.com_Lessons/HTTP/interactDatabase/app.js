/*
1. Take a look at the simple HTTP server to the right. The endpoint of this HTTP server will communicate with a database that will return some data back to the server. Log the data coming back from the database request in the console.
2. Run the server using the terminal using the node command.
3. Check the terminal to see if the data was retrieved from the database.
    -- Nothing printed to console?! 
*/
const http = require('http');
const fs = require('fs');

// GET request handler
const handleGetRequest = (req, res) => {
 if (req.url === '/users') {
   // Loads the database and searches for data
   makeDatabaseRequest('users', (err, payload) => {
      if (err) {
        res.writeHeader(400);
        res.write("Error retrieving data");
      } else {
        // Process successful request
        console.log(payload) // Correct answer was here. 
        res.writeHeader(200, {"Content-Type": "application/json"});  
        res.write(JSON.stringify(payload));
      }
      res.end(); 
   });
 }
}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

function makeDatabaseRequest(type, cb) {
  fs.readFile('./database.json', 'utf8', function (err, payload) {
    if (err) {
      cb(err, null); 
    } else {
      cb(null, JSON.parse(payload)[type]);
    }
    // I tried to put it here. 
  });
}