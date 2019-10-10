import CryptoService from "./cryptoService.js";

const _cs = new CryptoService()

function drawCrypto() {
  let template = _cs.Crypto.cryptoTemplate()
  document.querySelector('#marquee').innerHTML = template
}

function drawMarketCap() {
  let template = _cs.Crypto.marketCapTemplate()
  document.title = template
}


export default class CryptoController {
  constructor() {
    _cs.addSubscriber('crypto', drawCrypto)
    _cs.addSubscriber('crypto', drawMarketCap)
    _cs.getCrypto()
    _cs.refresh()
  }

}