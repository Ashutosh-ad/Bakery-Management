const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const adminRoutes = require('./routes/adminRoutes');
const productRoutes = require('./routes/productRoutes');
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bakeryshop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => res.send('Bakery API is running'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
