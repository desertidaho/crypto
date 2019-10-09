export default class Crypto {
  constructor(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == 'bitcoin') {
        this.btcRank = data[i].rank
        this.btcName = data[i].name
        this.btcPrice = '$' + Number(data[i].priceUsd).toFixed(2)
        this.btc24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (data[i].id == 'ethereum') {
        this.ethRank = data[i].rank
        this.ethName = data[i].name
        this.ethPrice = '$' + Number(data[i].priceUsd).toFixed(2);
        this.eth24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (data[i].id == 'ripple') {
        this.xrpRank = data[i].rank
        this.xrpName = data[i].name
        this.xrpPrice = '$' + Number(data[i].priceUsd).toFixed(2);
        this.xrp24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (data[i].id == 'litecoin') {
        this.ltcRank = data[i].rank
        this.ltcName = data[i].name
        this.ltcPrice = '$' + Number(data[i].priceUsd).toFixed(2);
        this.ltc24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (data[i].id == 'stellar') {
        this.xlmRank = data[i].rank
        this.xlmName = data[i].name
        this.xlmPrice = '$' + Number(data[i].priceUsd).toFixed(2);
        this.xlm24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (data[i].id == 'chainlink') {
        this.linkRank = data[i].rank
        this.linkName = data[i].name
        this.linkPrice = '$' + Number(data[i].priceUsd).toFixed(2);
        this.link24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
      }
    }

    this.marketCapUsd = 0
    for (let i = 0; i < data.length; i++) {
      this.marketCapUsd += parseInt(Number(data[i].marketCapUsd).toFixed())
    };
    this.marketCapUsd = this.marketCapUsd + 5000000000
    this.marketCapUsd = ('$' + this.marketCapUsd).slice(0, 4) + '.' + ('' + this.marketCapUsd).slice(4, 6) + ' Billion'
  }


  cryptoTemplate() {
    return `
     <span>#${this.btcRank} ${this.btcName} &ensp; ${this.btcPrice} &ensp; ${this.btc24HourChange}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.ethRank} ${this.ethName} &ensp; ${this.ethPrice} &ensp; ${this.eth24HourChange}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span>  
     <span>#${this.xrpRank} ${this.xrpName} &ensp; ${this.xrpPrice} &ensp; ${this.xrp24HourChange}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span> 
     <span>#${this.ltcRank} ${this.ltcName} &ensp; ${this.ltcPrice} &ensp; ${this.ltc24HourChange}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.xlmRank} ${this.xlmName} &ensp; ${this.xlmPrice} &ensp; ${this.xlm24HourChange}%</span><span>&ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.linkRank} ${this.linkName} &ensp; ${this.linkPrice} &ensp; ${this.link24HourChange}%</span><span>&ensp; &ensp; &ensp; &ensp;</span>

          `
  }

}