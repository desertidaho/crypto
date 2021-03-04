export default class BlockCypher {
  constructor(data) {
    this.name = data.name
    this.height = data.height
    this.hash = data.hash
    this.time = data.time
    this.latest_url = data.latest_url
  }

  blockCypherTemplate() {
    this.dateTime = this.timeSince(this.time.split('.')[0])
    return `
    <a href="https://sochain.com/btc" target="" class="blockData">Bitcoin Block Height ${this.height} </a></br>
    <a href="https://bitcoin.org/bitcoin.pdf" class="mt-2 explorers">Bitcoin Whitepaper</a> </br>
    <a href="https://medium.com/coinmonks/the-biggest-ultimate-2020-cryptocurrency-resource-list-300-resources-4523e47f298" target="_blank" class="mt-2 explorers" onclick="window.open('https://bitcoin.org/en/')">Resources</a> </br>
    <a href="https://coinmarketcap.com/rankings/exchanges" class="mt-2 explorers">Exchanges</a> </br>
    <a href="https://www.cryptowisser.com/wallets" class="mt-2 explorers">Wallets</a>
          `
  }

  timeSince(date) {
    return new Date(date)
  }

}