// D&D Monster Picker -- Create, Read, Update, Delete Monsters and Associated Images 
// v0.1e

// Requirements for Express
const express = require('express');
const app = express(); 

// Requirements for HTTP 
const http = require('http');

// Empty Array for Monsters
const monsterArr = []; 

// Create (POST) -- handlePostRequest
app.post('/monsters', (req, res, next) => {
    const newMonster = createElement('monsterArr', req.query);
    if (newMonster) {
      monsterArr.push(newMonster);
      res.status(201).send(newMonster);
    } else {
      res.status(400).send();
    }
  });

// Read (GET) -- handleGetRequest by id 
app.get('/monsters/:id', (req, res, next) => {
    const foundMonster = getElementById(req.params.id, monsterArr);
    if (foundMonster) {
      res.send(foundMonster);
    } else {
      res.status(404).send();
    }
  });

// Update (PUT) -- handlePutRequest by ID 
app.put('/monsters/:id', (req, res, next) => {
    const monsterIndex = getIndexById(req.params.id, monsterArr);
    if (monsterIndex !== -1) {
      updateElement(req.params.id, req.query, expressions);
      res.send(monsterArr[monsterIndex]);
    } else {
      res.status(404).send();
    }
  });


// Delete (DELETE) -- handleDeleteRequest

// Start Server on 4002
const server = http.createServer((req, res) => {
    res.end('Monster Picker HTTP Server Operational');
  });  
  server.listen(4002, () => {
    
  });
