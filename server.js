const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect DB
connectDB();

app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/techs', require('./routes/techs'));
app.use('/api/logs', require('./routes/logs'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server in running on port ${PORT}`));
