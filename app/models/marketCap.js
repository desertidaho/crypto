export default class MarketCap {
  constructor(data) {
    this.marketCap = (data[0].marketCapUsd).toString()
  }

  marketCapTemplate() {
    this.marketCap = (this.marketCap.split('.'))[0].toString()
    if (this.marketCap.length == 14) {
      this.marketCap = '$' + this.marketCap.slice(0, 2) + '.' + this.marketCap.slice(2, 4) + 'T' //$10.00T
    }
    else if (this.marketCap.length == 13) {
      this.marketCap = '$' + this.marketCap.slice(0, 1) + '.' + this.marketCap.slice(1, 3) + 'T' //$1.00T
    }
    else {
      this.marketCap = '$' + this.marketCap.slice(0, 3) + '.' + this.marketCap.slice(4, 6) + 'B' //$999.99B
    }

    return `
            <a href="https://www.livecoinwatch.com/price/Bitcoin-BTC" target="" id="marketCap">Bitcoin Market Cap ${this.marketCap}</a>
          `
  }


}