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
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      },
      timeout: 10000
    });
    const $ = cheerio.load(response.data);
    $('script, style, nav, footer, header, aside').remove();
    const pageText = $('body').text().replace(/\s+/g, ' ').trim().slice(0, 4000);
    const aiReply = await askClaude(pageText, userCommand, mode);
    res.json({ reply: aiReply });
  } catch (error) {
    console.error(error.message);
    // Send specific error message to frontend
    if (error.response && error.response.status === 403) {
      res.status(500).json({ error: 'This website blocks scrapers. Try Wikipedia, BBC, or a blog.' });
    } else {
      res.status(500).json({ error: 'Something went wrong: ' + error.message });
    }
  }
});

module.exports = router;