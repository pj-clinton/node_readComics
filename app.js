const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/comics', async (req, res) => {
  try {
      const url = 'https://www.supermegamonkey.net/chronocomic/';
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);

      // Use Cheerio selectors to extract data
      const comics = [];

      // Your code to extract data from the website

      res.json(comics);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
  }
});
