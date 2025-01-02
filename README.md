Real-Time News Analysis for Investment Decisions
A project that aggregates, scrapes, and analyzes real-time news articles to provide insights for investment decisions, using SerpAPI, Cheerio, and DeepSeek API.

Table of Contents
Overview

Features

Installation

Usage

Technical Stack

Demo

Contributing

License

Acknowledgments

Contact

Overview
This project aims to provide real-time insights into stock market investments by analyzing the latest news articles. By leveraging SerpAPI for news aggregation, Cheerio for web scraping, and DeepSeek's Large Language Model (LLM) for analysis, the project offers a comprehensive solution for investors looking to make informed decisions based on current events.

Key Use Case
Analyzing the impact of the Tesla Cybertruck explosion on Tesla's stock within an hour of the event.

Features
Real-Time News Fetching: Utilizes SerpAPI to gather the latest news articles.

Comprehensive Web Scraping: Uses Cheerio to extract full content from news articles.

AI-Powered Analysis: Employs DeepSeek LLM to analyze news content and provide insights.

Customizable Search Parameters: Adjust search queries, time periods, and locations.

Investment Insights: Generates actionable recommendations based on news analysis.

Installation
Prerequisites
Node.js and npm installed on your machine.

Steps
Clone the repository:

bash
Copy
git clone https://github.com/yourusername/real-time-news-analysis.git
Install dependencies:

bash
Copy
npm install
Set up environment variables:

Obtain API keys for SerpAPI and DeepSeek.

Create a .env file in the root directory with the following content:

Copy
SERPAPI_KEY=your_serpapi_key
DEEPSEEK_API_KEY=your_deepseek_api_key
Usage
Run the script:

bash
Copy
node fetchNewsResults.js
The script will fetch the latest news, scrape the content, and analyze it using DeepSeek LLM.

View the output in the console for insights and recommendations.

Technical Stack
SerpAPI: For fetching the latest news articles.

Cheerio: For web scraping news content.

DeepSeek API: For AI-powered analysis of news data.

Axios: For making HTTP requests.

Node.js: Runtime environment for the script.

Demo
Watch the project in action on YouTube:

Watch on YouTube

Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch:

bash
Copy
git checkout -b feature/YourFeature
Make your changes and commit them:

bash
Copy
git commit -m "Add your feature"
Push to the branch:

bash
Copy
git push origin feature/YourFeature
Open a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
SerpAPI: For providing access to Google search results.

DeepSeek: For the powerful LLM API.

Cheerio: For efficient web scraping.

Axios: For seamless HTTP requests.
