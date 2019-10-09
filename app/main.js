import NewsController from "./components/news/newsController.js";
import CryptoController from "./components/crypto/cryptoController.js";

class App {
  constructor() {
    this.controllers = {
      newsController: new NewsController(),
      cryptoController: new CryptoController()
    }
  }
}

window['app'] = new App()