require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');

const endpoint = 'https://serpapi.com/search.json';
const params = {
  api_key: process.env.SERPAPI_KEY, // SerpAPI key
  q: 'Tesla Stock',                 // Search query
  search_type: 'news',             // Specify news search
  location: 'United States',       // Geo-location for news
  time_period: 'last_month',       
  num: 10                          
};


const fetchNewsResults = async () => {
  try {
    // Make a GET request to SerpAPI
    console.log('Making API request to SerpAPI...');
    const response = await axios.get(endpoint, { params });
    console.log('API request completed. Status:', response.status);


    console.log('API Response Data:', response.data);


    let results = [];

    // Use top_stories if available
    if (response.data.top_stories) {
      results = results.concat(response.data.top_stories.map(story => ({
        type: 'story',
        title: story.title,
        link: story.link,
        snippet: story.snippet,
        source: story.source,
        date: story.date,
        thumbnail: story.thumbnail,
        story: story,
        content: '' // 
      })));
    }

    if (results.length === 0) {
      throw new Error('No news content found in API response');
    }

    console.log(`Found ${results.length} news items:`);


    await Promise.all(results.map(async (item) => {
      try {
        const { data } = await axios.get(item.link, { timeout: 5000 });
        const $ = cheerio.load(data);

        const content = $('article, .article-content, .content, .post-content, .entry-content')
          .text()
          .trim()
          .replace(/\s+/g, ' ') || 'Content not found';
        item.content = content;
      } catch (error) {
        console.error(`Error scraping ${item.link}:`, error.message);
        item.content = 'Content not found';
      }
    }));

    // Log results after all content is scraped
    results.forEach((item, index) => {
      console.log(`\nItem ${index + 1} (${item.type}):`);
      console.log(`Title: ${item.title}`);
      console.log(`Link: ${item.link}`);
      if (item.snippet) console.log(`Snippet: ${item.snippet}`);
      if (item.source) console.log(`Source: ${item.source}`);
      if (item.date) console.log(`Date: ${item.date}`);
      if (item.thumbnail) console.log(`Thumbnail: ${item.thumbnail}`);
      console.log(`Content: ${item.content}`);
    });
    console.log("fetchNewsResults", results);

    // Post results to DeepSeek API
    const deepSeekApiKey = process.env.DEEPSEEK_API_KEY;
    if (!deepSeekApiKey) {
      throw new Error('DeepSeek API key not found in environment variables.');
    }

    // Prepare the question based on the results
    const question = `Based on the information on these news articles, would it be profitable to buy Tesla Stock?\n\n${results.map(item => item.content).join('\n\n')}`;

    // DeepSeek API endpoint
    const deepSeekEndpoint = 'https://api.deepseek.com/v1/chat/completions';

    // Prepare headers
    const headers = {
      'Authorization': `Bearer ${deepSeekApiKey}`,
      'Content-Type': 'application/json'
    };

    // Prepare data payload
    const data = {
      model: "deepseek-chat",
      messages: [
        {
          role: "user",
          content: question
        }
      ],
      temperature: 0.7
    };

    // Send POST request to DeepSeek API
    console.log('Sending request to DeepSeek API...');
    const deepSeekResponse = await axios.post(deepSeekEndpoint, data, { headers });
    console.log('DeepSeek API Response:', deepSeekResponse.data);

    // Extract and log the message content
    if (deepSeekResponse.data.choices && deepSeekResponse.data.choices.length > 0 && deepSeekResponse.data.choices[0].message && deepSeekResponse.data.choices[0].message.content) {
      const messageContent = deepSeekResponse.data.choices[0].message.content;
      console.log('DeepSeek Response Message:', messageContent);
    } else {
      console.log('No message content received from DeepSeek API.');
    }

  } catch (error) {
    console.error('Error fetching data from SerpAPI or posting to DeepSeek:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
      console.error('Response data:', error.response.data);
    }
    if (error.config) {
      console.error('Request config:', {
        url: error.config.url,
        method: error.config.method,
        headers: error.config.headers,
        data: error.config.data
      });
    }
  }
};


fetchNewsResults();