import CryptoService from "./cryptoService.js";

const _cs = new CryptoService()

function drawCrypto() {
  let template = _cs.Crypto.cryptoTemplate()
  document.querySelector('#marquee').innerHTML = template
}

function drawMarketCap() {
  let template = _cs.Crypto.marketCap()
  document.querySelector('#block-data').innerHTML = template
}

function drawBlockCypher() {
  let template = _cs.BlockCypher.blockCypherTemplate()
  document.querySelector('#block-cypher').innerHTML = template
}


export default class CryptoController {
  constructor() {
    _cs.addSubscriber('crypto', drawCrypto)
    _cs.addSubscriber('crypto', drawMarketCap)
    _cs.addSubscriber('blockCypher', drawBlockCypher)
    _cs.getBlockCypher()
    _cs.getCrypto()
    _cs.refresh()

  }

}