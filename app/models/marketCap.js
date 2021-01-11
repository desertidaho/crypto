export default class MarketCap {
  constructor(data) {
    this.marketCap = (data.quote.USD.total_market_cap).toString()
  }

  marketCapTemplate() {
    if (this.marketCap.length > 17) {
      this.marketCap = '$' + this.marketCap.slice(0, 1) + '.' + this.marketCap.slice(2, 4) + 'T'
    }
    else {
      this.marketCap = '$' + this.marketCap.slice(0, 3) + '.' + this.marketCap.slice(4, 6) + 'B'
    }

    return `
            <a href="https://coinmarketcap.com/charts/" target="" id="marketCap">Crypto Market Cap ${this.marketCap}</a>
          `
  }


}