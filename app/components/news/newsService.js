import News from "../../models/news.js";

// @ts-ignore
const _newsApi = axios.create({
  baseURL: 'https://agile-harbor-25896.herokuapp.com/https://min-api.cryptocompare.com/data/v2/news/?lang=EN',
  timeout: 40000,
  headers: { content_type: 'application/x-www-form-urlencoded' },
  params: { access_key: '55c1a6ab5caed516aea2dffc35932e39ac9cf84f2c065b9b453e1c461875bda0' },
});

let _state = {
  news: {}
}

let _subscribers = {
  news: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}


//Public
export default class NewsService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get News() {
    return _state.news
  }

  getNews() {
    _newsApi.get()
      .then(res => {
        _setState('news', new News(res.data.Data))
      })
  }

  refreshNews() {
    setInterval(this.getNews, 180000)
  }


}