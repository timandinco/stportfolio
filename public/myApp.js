// myApp.js
const express = require('express');
const app = express();

// Route to display a message
app.get('/', (req, res) => {
    res.send('<h1>Hello, your Node.js app is running on Cloudways!</h1>');
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});