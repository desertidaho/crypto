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
    console.log(this.dateTime)
    return `
    <a href="https://sochain.com/btc" target="_blank" class="blockData">Bitcoin Block Data </a></br>
    <a href="https://sochain.com/block/BTC/${this.height}" target="_blank" class="blockData">height ${this.height} </a></br>
    <a href="https://sochain.com/block/BTC/${this.hash}" target="_blank" class="blockData">hash ...${this.hash.substring(this.hash.length - 30)} </a></br>
    <a href="https://live.blockcypher.com/btc/block/${this.hash}" target="_blank" class="mt-2 explorers">Block Cypher</a> </br>
    <a href="https://blockstream.info/block/${this.hash}?expand" target="_blank" class="mt-2 explorers">Block Stream</a> </br>
    <a href="https://sochain.com/block/BTC/${this.hash}" target="_blank" class="mt-2 explorers">SoChain</a>
          `
  }

  timeSince(date) {
    return new Date(date)
  }


}