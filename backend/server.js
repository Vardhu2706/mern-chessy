// Imports
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

// Import Route Handlers
// const userRoutes = require('./routes/userRoutes');

// Connecting to MongoDB
connectDB();

// Init App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/users', userRoutes); 

// Fallback route for unhandled requests
app.use((req, res) => {
    res.status(404).send('Resource not found');
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});