import Crypto from "../../models/crypto.js";
import BlockCypher from "../../models/cypher.js";
import Hashrate from "../../models/hashrate.js";
import MarketCap from "../../models/marketCap.js";

// @ts-ignore
const _cryptoApi = axios.create({
  baseURL: 'https://api.coincap.io/v2/assets',
  timeout: 15000
});

// @ts-ignore
const _blockCypherApi = axios.create({
  baseURL: 'https://api.blockcypher.com/v1/btc/main',
  timeout: 15000
});

// @ts-ignore
const _hashrateApi = axios.create({
  baseURL: 'https://sochain.com/api/v2/get_info/BTC',
  timeout: 15000
});

// @ts-ignore
const _marketCapApi = axios.create({
  baseURL: 'https://agile-harbor-25896.herokuapp.com/https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest',
  timeout: 15000,
  headers: { 'X-CMC_PRO_API_KEY': 'a702c794-bac8-4362-bdd4-9fe1ebf70023' }
});


let _state = {
  crypto: {},
  marketCap: {},
  blockCypher: {},
  hashrate: {}
}

let _subscribers = {
  crypto: [],
  marketCap: [],
  blockCypher: [],
  hashrate: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}


//Public
export default class CryptoService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Crypto() {
    return _state.crypto
  }

  get MarketCap() {
    return _state.marketCap
  }

  get BlockCypher() {
    return _state.blockCypher
  }

  get Hashrate() {
    return _state.hashrate
  }

  getCrypto() {
    _cryptoApi.get()
      .then(res => {
        _setState('crypto', new Crypto(res.data.data))
      })
  }

  refresh() {
    setInterval(this.getCrypto, 20000)
    setInterval(this.getBlockCypher, 300000)
  }

  getBlockCypher() {
    _blockCypherApi.get()
      .then(res => {
        _setState('blockCypher', new BlockCypher(res.data))
      })
  }

  getHashrate() {
    _hashrateApi.get()
      .then(res => {
        _setState('hashrate', new Hashrate(res.data.data))
      })
  }

  getMarketCap() {
    _cryptoApi.get()
      .then(res => {
        _setState('marketCap', new MarketCap(res.data.data))
      })
  }

}