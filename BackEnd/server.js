require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { saveQuery, getUserQueries } = require('./firebase');

const app = express();
app.use(cors());
app.use(express.json());

const claudeRoute = require('./routes/claude');
app.use('/api', claudeRoute);

// Save a query to history
app.post('/api/history', async (req, res) => {
  const { userId, url, query, response } = req.body;
  try {
    await saveQuery(userId, url, query, response);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get query history for a user
app.get('/api/history/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const queries = await getUserQueries(userId);
    res.json(queries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});