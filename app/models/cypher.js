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
    <a href="https://sochain.com/block/BTC/${this.height}" target="" class="blockData">Bitcoin Block Height ${this.height} </a></br>
    <a href="https://live.blockcypher.com/btc/block/${this.hash}" target="" class="mt-2 explorers">Block Cypher</a> </br>
    <a href="https://blockstream.info/block/${this.hash}?expand" target="" class="mt-2 explorers">Blockstream</a> </br>
    <a href="https://medium.com/coinmonks/the-biggest-ultimate-2020-cryptocurrency-resource-list-300-resources-4523e47f298" class="mt-2 explorers">Resources</a> </br>
    <a href="https://www.g2.com/categories/cryptocurrency-exchanges" class="mt-2 explorers">Exchanges</a> </br>
    <a href="https://www.g2.com/categories/cryptocurrency-wallets" class="mt-2 explorers">Wallets</a>
          `
  }

  timeSince(date) {
    return new Date(date)
  }


}