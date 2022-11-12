// D&D Monster Manual -- Create, Read, Update, Delete Monsters and Associated Images 
// v0.2a

// Requirements for Express
const express = require('express');
const app = express(); 
const port = 4001



// Create (POST) -- handlePostRequest

// Read (GET) -- handleGetRequest by id 
app.get('/', (req, res) => {
    res.send('Welcome to the Monster Manual\n')  
})

// Update (PUT) -- handlePutRequest by ID 

// Delete (DELETE) -- handleDeleteRequest

// Start Server on 4001
app.listen(port, () => {
    console.log(`Server Passed Perception Check: Port ${port}`)
})