import NewsService from "./newsService.js";

const _ns = new NewsService()

function drawNews() {
  let template = _ns.News.newsTemplate()
  document.querySelector('#news-cards').innerHTML = template
}

//Public
export default class NewsController {
  constructor() {
    _ns.addSubscriber('news', drawNews)
    _ns.getNews()
  }

}