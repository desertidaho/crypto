import NewsController from "./components/news/newsController.js";

class App {
  constructor() {
    this.controllers = {
      newsController: new NewsController()
    }
  }
}

window['app'] = new App()