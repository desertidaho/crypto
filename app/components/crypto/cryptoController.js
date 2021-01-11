import CryptoService from "./cryptoService.js";

const _cs = new CryptoService()

function drawCrypto() {
  let template = _cs.Crypto.cryptoTemplate()
  document.querySelector('#marquee').innerHTML = template
}

function drawMarketCap() {
  let template = _cs.MarketCap.marketCapTemplate()
  document.querySelector('#block-data').innerHTML = template
}

function drawBlockCypher() {
  let template = _cs.BlockCypher.blockCypherTemplate()
  document.querySelector('#block-cypher').innerHTML = template
}

function drawHashrate() {
  let template = _cs.Hashrate.hashrateTemplate()
  document.querySelector('#hashrate').innerHTML = template
}


export default class CryptoController {
  constructor() {
    _cs.addSubscriber('crypto', drawCrypto)
    _cs.addSubscriber('marketCap', drawMarketCap)
    _cs.addSubscriber('blockCypher', drawBlockCypher)
    _cs.addSubscriber('hashrate', drawHashrate)
    _cs.getBlockCypher()
    _cs.getHashrate()
    _cs.getCrypto()
    _cs.getMarketCap()
    _cs.refresh()

  }

}