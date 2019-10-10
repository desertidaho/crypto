import NewsService from "./newsService.js";

const _ns = new NewsService()

function drawNews() {
  let template = _ns.News.newsTemplate()
  document.querySelector('#news-cards').innerHTML = template
}

function drawSources() {
  let template = _ns.News.sourcesTemplate()
  document.querySelector('#sources').innerHTML = template
}

//Public
export default class NewsController {
  constructor() {
    _ns.addSubscriber('news', drawNews)
    _ns.addSubscriber('news', drawSources)
    _ns.getNews()
  }

}