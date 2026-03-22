const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const { askClaude } = require('../claude');

router.post('/ask', async (req, res) => {
  const { url, userCommand, mode } = req.body;
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const $ = cheerio.load(response.data);
    $('script, style, nav, footer').remove();
    const pageText = $('body').text().replace(/\s+/g, ' ').trim().slice(0, 4000);
    const aiReply = await askClaude(pageText, userCommand, mode);
    res.json({ reply: aiReply });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

module.exports = router;