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
    <a href="https://sochain.com/block/BTC/${this.hash}" target="" class="blockData">Bitcoin Block Hash ...${this.hash.substring(this.hash.length - 7)} </a></br>
    <a href="https://live.blockcypher.com/btc/block/${this.hash}" target="" class="mt-2 explorers">Block Cypher</a> </br>
    <a href="https://blockstream.info/block/${this.hash}?expand" target="" class="mt-2 explorers">Block Stream</a> </br>
    <a href="https://sochain.com/block/BTC/${this.hash}" target="" class="mt-2 explorers">SoChain</a>
          `
  }

  timeSince(date) {
    return new Date(date)
  }


}