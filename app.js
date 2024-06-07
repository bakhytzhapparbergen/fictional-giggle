// This is a basic example of an app.js file

// Importing required modules
import express from 'express';
const app = express();
const port = 3000;

// Setting up a basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
