# **Real-Time News Analysis for Investment Decisions**

A project that aggregates, scrapes, and analyzes real-time news articles to provide insights for investment decisions, using **SerpAPI**, **Cheerio**, and **DeepSeek API**.

---

## **Table of Contents**
- [**Overview**](#overview)
- [**Features**](#features)
- [**Installation**](#installation)
- [**Usage**](#usage)
- [**Technical Stack**](#technical-stack)
- [**Demo**](#demo)
- [**Contributing**](#contributing)
- [**License**](#license)
- [**Acknowledgments**](#acknowledgments)
- [**Contact**](#contact)

---

## **Overview**

This project aims to provide **real-time insights** into stock market investments by analyzing the latest news articles. By leveraging **SerpAPI** for news aggregation, **Cheerio** for web scraping, and **DeepSeek's Large Language Model (LLM)** for analysis, the project offers a comprehensive solution for investors looking to make **informed decisions** based on current events.

### **Key Use Case**
> Analyzing the impact of the **Tesla Cybertruck explosion** on Tesla's stock within an hour of the event.

---

## **Features**

- **Real-Time News Fetching**: Utilizes **SerpAPI** to gather the latest news articles.
- **Comprehensive Web Scraping**: Uses **Cheerio** to extract full content from news articles.
- **AI-Powered Analysis**: Employs **DeepSeek LLM** to analyze news content and provide insights.
- **Customizable Search Parameters**: Adjust search queries, time periods, and locations.
- **Investment Insights**: Generates **actionable recommendations** based on news analysis.

---

## **Installation**

### **Prerequisites**
- **Node.js** and **npm** installed on your machine.

### **Steps**
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/real-time-news-analysis.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Obtain API keys for **SerpAPI** and **DeepSeek**.
   - Create a `.env` file in the root directory with the following content:
     ```env
     SERPAPI_KEY=your_serpapi_key
     DEEPSEEK_API_KEY=your_deepseek_api_key
     ```

---

## **Usage**

1. **Run the script:**
   ```bash
   node fetchNewsResults.js
   ```
2. The script will fetch the latest news, scrape the content, and analyze it using **DeepSeek LLM**.
3. **View the output** in the console for insights and recommendations.

---

## **Technical Stack**

- **SerpAPI**: For fetching the latest news articles.
- **Cheerio**: For web scraping news content.
- **DeepSeek API**: For AI-powered analysis of news data.
- **Axios**: For making HTTP requests.
- **Node.js**: Runtime environment for the script.

---

## **Demo**

Watch the project in action on YouTube:

[**Watch on YouTube**](#)

---

## **Contributing**

**Contributions are welcome!** To contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Make your changes and commit them:**
   ```bash
   git commit -m "Add your feature"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a pull request.**

---

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- **SerpAPI**: For providing access to Google search results.
- **DeepSeek**: For the powerful LLM API.
- **Cheerio**: For efficient web scraping.
- **Axios**: For seamless HTTP requests.

---

## **Contact**

For any inquiries or questions, feel free to reach out!
