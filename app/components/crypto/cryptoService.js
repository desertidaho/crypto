import Crypto from "../../models/crypto.js";

// @ts-ignore
const _cryptoApi = axios.create({
  baseURL: 'https://api.coincap.io/v2/assets',
  timeout: 15000
});

let _state = {
  crypto: {},
  marketCap: {}
}

let _subscribers = {
  crypto: [],
  marketCap: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}


//Public
export default class PriceService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Crypto() {
    return _state.crypto
  }

  get MarketCap() {
    return _state.marketCap
  }

  getCrypto() {
    _cryptoApi.get()
      .then(res => {
        _setState('crypto', new Crypto(res.data.data))
      })
  }

  refresh() {
    setInterval(this.getCrypto, 20000)
  }

}