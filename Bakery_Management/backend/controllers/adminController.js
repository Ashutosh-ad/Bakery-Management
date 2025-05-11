const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// Admin Login
const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  // Read the admin credentials from the JSON file
  fs.readFile(path.join(__dirname, 'adminEmail.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading admin credentials' });
    }
    const adminData = JSON.parse(data);

    // Check if the entered email and password match
    if (email === adminData.email && password === adminData.password) {
      // If they match, send success response
      res.json({ message: 'Login successful' });
    } else {
      // If they don't match, send error
      res.status(400).json({ message: 'Invalid email or password' });
    }
  });
};

 /* try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordMatch = await admin.matchPassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: admin._id }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};*/

module.exports = { adminLogin };
