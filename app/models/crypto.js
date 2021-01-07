export default class Crypto {
  constructor(data) {
    for (let i = 0; i < data.length; i++) {
      let propRank = 'rank' + i
      let propName = 'name' + i
      let propPrice = 'price' + i
      let prop24hrChange = 'twentyFourHoursChange' + i
      this[propRank] = data[i].rank
      this[propName] = data[i].name
      this[propPrice] = '$' + Number(data[i].priceUsd).toFixed(2)
      this[prop24hrChange] = Number(data[i].changePercent24Hr).toFixed(2)
    }

    this.marketCapUsd = 0
    for (let i = 0; i < data.length; i++) {
      this.marketCapUsd += parseInt(Number(data[i].marketCapUsd).toFixed())
    };
    this.marketCapUsd = this.marketCapUsd + 10000000000
    this.marketCapUsd = ('$' + this.marketCapUsd).slice(0, 2) + '.' + ('' + this.marketCapUsd).slice(1, 4) + 'T'
  }


  cryptoTemplate() {
    return `
     <a href="https://coincap.io" id="crypto" target=""><span>#${this.rank0} ${this.name0} &ensp; ${this.price0} &ensp; ${this.twentyFourHoursChange0}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.rank1} ${this.name1} &ensp; ${this.price1} &ensp; ${this.twentyFourHoursChange1}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.rank2} ${this.name2} &ensp; ${this.price2} &ensp; ${this.twentyFourHoursChange2}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.rank3} ${this.name3} &ensp; ${this.price3} &ensp; ${this.twentyFourHoursChange3}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.rank4} ${this.name4} &ensp; ${this.price4} &ensp; ${this.twentyFourHoursChange4}%</span><span>&ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.rank5} ${this.name5} &ensp; ${this.price5} &ensp; ${this.twentyFourHoursChange5}%</span><span>&ensp; &ensp; &ensp; &ensp; </span>   
     <span>#${this.rank6} ${this.name6} &ensp; ${this.price6} &ensp; ${this.twentyFourHoursChange6}%</span><span>&ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.rank7} ${this.name7} &ensp; ${this.price7} &ensp; ${this.twentyFourHoursChange7}%</span><span>&ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.rank8} ${this.name8} &ensp; ${this.price8} &ensp; ${this.twentyFourHoursChange8}%</span><span>&ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.rank9} ${this.name9} &ensp; ${this.price9} &ensp; ${this.twentyFourHoursChange9}%</span><span>&ensp; &ensp; &ensp; &ensp;</span></a>
     `
  }

  btcTemplate() {
    return `
      Crypto News  (BTC ${this.price0})
          `
  }

  marketCap() {
    return `
    <a href="https://coinmarketcap.com/charts/" target="" class="blockData" style="text-decoration:none;">Crypto Market Cap ${this.marketCapUsd}</a> </br>
    <a href="https://digitalik.net/btc/sf_model" target="" class="blockData" style="text-decoration:none;">Bitcoin Stock-to-Flow Model</a>
    `
  }

}