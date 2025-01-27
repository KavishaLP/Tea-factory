// Import required modules
import dotenv from 'dotenv';
import sql from './config/sql.js';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

// Initialize the app
const app = express();



// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Backend!');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));