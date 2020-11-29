import Crypto from "../../models/crypto.js";
import BlockCypher from "../../models/cypher.js";

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

let _state = {
  crypto: {},
  marketCap: {},
  blockCypher: {}
}

let _subscribers = {
  crypto: [],
  marketCap: [],
  blockCypher: []

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

  getCrypto() {
    _cryptoApi.get()
      .then(res => {
        _setState('crypto', new Crypto(res.data.data))
      })
  }

  refresh() {
    setInterval(this.getCrypto, 20000)
    setInterval(this.getBlockCypher, 600000)
  }

  getBlockCypher() {
    _blockCypherApi.get()
      .then(res => {
        console.log(res.data)
        _setState('blockCypher', new BlockCypher(res.data))
      })
  }

}