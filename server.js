const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

connectDB();

app.use(express.json());

const uri = "mongodb://localhost:27017/myBlogDB"; 
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 20000 })
      .then(() => {
          console.log("MongoDB connected successfully");
      })
      .catch(err => {
          console.error("MongoDB connection error:", err);
      });

// Clear mongoose models cache if hot-reloading
// if (process.env.NODE_ENV === 'development') {
//   delete mongoose.connection.models['User'];
//   delete mongoose.connection.models['Post'];
// }

app.use('/api/auth', authRoutes);

app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});