/*
Now that your server starting code should be working properly, you can start up the Express Yourself machine. Start your server from the terminal window with node app.js. 
Once it logs that it is running, you can refresh the browser window currently displaying Not Found.

Inside app.js, create a route handler to handle a GET request to '/expressions'. For now, give it a req, res, next callback. For now, log the req object inside the callback. 
Verify that the route works and logs the request by starting your server and clicking the Refresh Expressions button which will send a GET /expressions request.
*/ 
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// CWBM = Code Written By Me
app.get('/expressions', (req, res, next) => { 
  console.log(req); 
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
