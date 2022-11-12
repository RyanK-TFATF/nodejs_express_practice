// D&D Monster Picker -- Create, Read, Update, Delete Monsters and Associated Images 
// v0.1b

// Requirements for Express
const express = require('express');
const app = express(); 

// Requirements for HTTP 
const http = require('http');

// Create (POST) -- handlePostRequest

// Read (GET) -- handleGetRequest

// Update (PUT) -- handlePutRequest

// Delete (DELETE) -- handleDeleteRequest

// Start Server on 4002
const server = http.createServer((req, res) => {
    res.end('Monster Picker HTTP Server Operational');
  });  
  server.listen(4002, () => {
    
  });
