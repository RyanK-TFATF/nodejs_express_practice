const fs = require('fs');

// TODO: Require the http module
const http = require('http'); // Solved correctly on my own. 

// TODO: Create a server
const server = http.createServer((request, response) => { // Solved using my previus examples. 
   // TODO: Create a url object with request url and host name
  const url = new URL(request.url, `http://${request.headers.host}`); // Did not use `` in my original version for the URL. 
  // TODO: Create a switch statement based on pathname of url
  // TODO: Check if request method is GET
  switch (url.pathname) { // Correct on my own. 
    case '/': // Correct on my own. 
      if (request.method === 'GET') { // Correct on my own. 
        // TODO: Get value of 'name' query
        const name = url.SearchParams.get('name'); // I did not have ' ' around name. 
        console.log(`User ${name} has started playing.`); // Used Video Solution
        // TODO: Write response header
        response.writeHead(200, {'Content-Type': 'text/html'}        
        ); 
        fs.createReadStream('index.html').pipe(response);
        break;
    } else if (request.method === 'POST') {
        handlePostResponse(request, response);
        break;
    }  
    default:
      // Default action. 
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream('404.html').pipe(response);
        break;  
    }
})

// TODO: Have server listen at port 4001
server.listen(4001, () => {
    console.log(`Server is listening on http://localhost:${server.address().port}`);
})


// Function for handling POST responses
function handlePostResponse(request, response){
  request.setEncoding('utf8');
  
  // Receive chunks on 'data' event and concatenate to body variable
  let body = '';
  request.on('data', function (chunk) {
    body += chunk;
  });
  
  // When done receiving data, select a random choice for server
  // Compare server choice with player's choice and send an appropriate message back
  request.on('end', function () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];

    const choice = body;

    let message;

    const tied = `Aww, we tied! I also chose ${randomChoice}.`;
    const victory = `Dang it, you won! I chose ${randomChoice}.`;
    const defeat = `Ha! You lost. I chose ${randomChoice}.`;

    if (choice === randomChoice) {
      message = tied;
    } else if (
        (choice === 'rock' && randomChoice === 'paper') ||
        (choice === 'paper' && randomChoice === 'scissors') ||
        (choice === 'scissors' && randomChoice === 'rock')
    ) {
      message = defeat;
    } else {
      message = victory;
    }
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`You selected ${choice}. ${message}`);
  });
};