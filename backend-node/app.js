const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// In-memory user store
let users = {};

app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse JSON bodies

// Signup route
app.post('/signup', (req, res) => {
  const { fullName, email, password } = req.body;
  console.log('Received signup:', req.body);

  if (users[email]) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users[email] = { fullName, password };
  console.log('Current users:', users);
  res.status(201).json({ message: 'User created successfully' });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Received login:', req.body);

  if (users[email] && users[email].password === password) {
    res.json({ message: `Welcome ${users[email].fullName}! Login successful.` });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
