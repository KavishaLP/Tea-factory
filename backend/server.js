// Import required modules
import dotenv from 'dotenv';
import sql from './config/sql.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();

// Initialize the app
const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(cors()); // Enable CORS

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Backend!');
});

// Start the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));