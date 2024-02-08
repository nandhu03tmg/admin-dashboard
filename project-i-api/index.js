const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const staffRoutes = require('./routes/staffRoute');

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection string for MongoDB Atlas
const connectionString = 'mongodb+srv://nandhu03tmg:nandhakumar2003@onekode.jonpxrz.mongodb.net/test?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check for MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Middleware to JSON
app.use(bodyParser.json());

// Middleware to CORS
app.use(cors());

// Use the staff routes
app.use('/staff', staffRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
