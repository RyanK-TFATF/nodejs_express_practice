/*
1.  In our HTTP server, we will process incoming GET requests by invoking a handler function called handleGetRequest(). Part of this processing will include making a GET request to the following URL which requires some configuration. 
    https://static-assets.codecademy.com/Courses/Learn-Node/http/data.json
    Let’s begin this configuration by creating a const variable called options within the handleGetRequest() function. Set the variable to be an object containing the properties hostname, path, and method. Using the URL above, set appropriate values for the properties of the options object.
2.  Now that the request has been configured, we can execute the request in the handleGetRequest() function. To make the request, we will use the .request() method from the https module.
    Create a const variable called request. Set the variable to the https.request() method with the options object as the first argument and a callback function as the second argument. Create a callback function using the ES6 arrow function syntax. The callback function should also take a single argument called response.
3.  Our HTTPS request needs to be set up to be able to receive the data properly. Data from the response will usually be received in chunks and pieced together. As such, we need to watch for these chunks of data and process them. We can do this by listening to the data event.
    In the callback of the .request() method, create a variable called data initialized with an empty string. Then, listen for the data event and add the received data to the data variable.
4.  Once all of the data has been received from the response, we need to handle that data.
    To know when a response is finished, we can listen for the end event. Still in the callback of the .request() method, set up a listener for the end event of the response.
5.  When the end event is triggered, we can work with the data from the response. In this case, we will act as a proxy and relay the data from the external API to the client that made the request. In the callback of the listener for the end event, log the data retrieved from the API to the console, then return the data by dispatching a response to the caller.
    After the definition of request but still within handleGetRequest, be sure to signal the end of the request.
*/ 
const http = require('http');
const https = require('https');

// Did this part on my own, all remaining code is from the solution. I was lost. 
const handleGetRequest = (req, res) => {
  const options = {
    hostname: 'static-assets.codecademy.com',
    path: '/Courses/Learn-Node/http/data.json',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const request = https.request(options, response => {
    let data = '';

    // Aggregate data chunks as they come in from the API
    response.on('data', (chunk) => {
      data += chunk;
    });

    // Handle the end of the request
    response.on('end', () => {
      console.log("Retrieved Data:", data);
      res.end(data);
    });
  });

  request.end();
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