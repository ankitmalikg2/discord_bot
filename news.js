const NewsAPI = require('newsapi');
const config = require('./config.json')
const newsapi = new NewsAPI(config.news_api_token);

const getNews = newsapi.v2.topHeadlines({
  category: 'technology',
  language: 'en',
  country: 'us'
})

module.exports = {
    getNews: getNews
}
