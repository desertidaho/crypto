export default class Crypto {
  constructor(data) {
    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        this.rank0 = data[i].rank
        this.name0 = data[i].name
        this.price0 = '$' + Number(data[i].priceUsd).toFixed(2)
        this.twentyFourHoursChange0 = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (i == 1) {
        this.rank1 = data[i].rank
        this.name1 = data[i].name
        this.price1 = '$' + Number(data[i].priceUsd).toFixed(2);
        this.twentyFourHoursChange1 = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (i == 2) {
        this.rank2 = data[i].rank
        this.name2 = data[i].name
        this.price2 = '$' + Number(data[i].priceUsd).toFixed(2);
        this.twentyFourHoursChange2 = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (i == 3) {
        this.rank3 = data[i].rank
        this.name3 = data[i].name
        this.price3 = '$' + Number(data[i].priceUsd).toFixed(2);
        this.twentyFourHoursChange3 = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (i == 4) {
        this.rank4 = data[i].rank
        this.name4 = data[i].name
        this.price4 = '$' + Number(data[i].priceUsd).toFixed(2);
        this.twentyFourHoursChange4 = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (i == 5) {
        this.rank5 = data[i].rank
        this.name5 = data[i].name
        this.price5 = '$' + Number(data[i].priceUsd).toFixed(2);
        this.twentyFourHoursChange5 = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (i == 6) {
        this.rank6 = data[i].rank
        this.name6 = data[i].name
        this.price6 = '$' + Number(data[i].priceUsd).toFixed(2);
        this.twentyFourHoursChange6 = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (i == 7) {
        this.rank7 = data[i].rank
        this.name7 = data[i].name
        this.price7 = '$' + Number(data[i].priceUsd).toFixed(2);
        this.twentyFourHoursChange7 = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (i == 8) {
        this.rank8 = data[i].rank
        this.name8 = data[i].name
        this.price8 = '$' + Number(data[i].priceUsd).toFixed(2);
        this.twentyFourHoursChange8 = Number(data[i].changePercent24Hr).toFixed(2)
      }
      if (i == 9) {
        this.rank9 = data[i].rank
        this.name9 = data[i].name
        this.price9 = '$' + Number(data[i].priceUsd).toFixed(2);
        this.twentyFourHoursChange9 = Number(data[i].changePercent24Hr).toFixed(2)
      }
    }

    this.marketCapUsd = 0
    for (let i = 0; i < data.length; i++) {
      this.marketCapUsd += parseInt(Number(data[i].marketCapUsd).toFixed())
    };
    this.marketCapUsd = this.marketCapUsd + 5000000000
    this.marketCapUsd = ('$' + this.marketCapUsd).slice(0, 4) + '.' + ('' + this.marketCapUsd).slice(4, 6) + 'B'
  }


  cryptoTemplate() {
    return `
     <span>#${this.rank0} ${this.name0} &ensp; ${this.price0} &ensp; ${this.twentyFourHoursChange0}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.rank1} ${this.name1} &ensp; ${this.price1} &ensp; ${this.twentyFourHoursChange1}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span>  
     <span>#${this.rank2} ${this.name2} &ensp; ${this.price2} &ensp; ${this.twentyFourHoursChange2}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span> 
     <span>#${this.rank3} ${this.name3} &ensp; ${this.price3} &ensp; ${this.twentyFourHoursChange3}%</span><span>&ensp; &ensp; &ensp; &ensp; &ensp;</span>
     <span>#${this.rank4} ${this.name4} &ensp; ${this.price4} &ensp; ${this.twentyFourHoursChange4}%</span><span>&ensp; &ensp; &ensp; &ensp;</span></span>
     <span>#${this.rank5} ${this.name5} &ensp; ${this.price5} &ensp; ${this.twentyFourHoursChange5}%</span><span>&ensp; &ensp; &ensp; &ensp;     
     <span>#${this.rank6} ${this.name6} &ensp; ${this.price6} &ensp; ${this.twentyFourHoursChange6}%</span><span>&ensp; &ensp; &ensp; &ensp;</span></span>
     <span>#${this.rank7} ${this.name7} &ensp; ${this.price7} &ensp; ${this.twentyFourHoursChange7}%</span><span>&ensp; &ensp; &ensp; &ensp;</span></span>
     <span>#${this.rank8} ${this.name8} &ensp; ${this.price8} &ensp; ${this.twentyFourHoursChange8}%</span><span>&ensp; &ensp; &ensp; &ensp;</span></span>
     <span>#${this.rank9} ${this.name9} &ensp; ${this.price9} &ensp; ${this.twentyFourHoursChange9}%</span><span>&ensp; &ensp; &ensp; &ensp;</span></span>
     `
  }

  btcTemplate() {
    return `
      Crypto News  (BTC ${this.price0})
          `
  }

  marketCap() {
    return `
    Crypto Market Cap <a href="https://coinmarketcap.com/charts/" target="_blank" class="blockData" style="text-decoration:none;">${this.marketCapUsd}</a> </br>
    <a href="https://digitalik.net/btc/sf_model" target="_blank" class="blockData" style="text-decoration:none;">Bitcoin Stock-to-Flow Model</a>
    `
  }

}