export default class BlockCypher {
  constructor(data) {
    this.name = data.name
    this.height = data.height
    this.hash = data.hash
    this.time = data.time
    this.latest_url = data.latest_url
  }

  blockCypherTemplate() {
    return `
    Bitcoin Block Data: </br>
      height: <a href="https://sochain.com/btc" target="_blank" class="blockData">${this.height} </a></br>
      hash: <a href="https://sochain.com/block/BTC/${this.hash}" target="_blank" class="blockData">${this.hash} </a></br>
      time: <a href="https://sochain.com/block/BTC/${this.hash}" target="_blank" class="blockData">${this.time} </a></br>
      <a href="https://live.blockcypher.com/btc/block/${this.hash}" target="_blank" class="mt-2 explorers">Block Cypher</a> </br>
      <a href="https://blockstream.info/block/${this.hash}?expand" target="_blank" class="mt-2 explorers">Block Stream</a> </br>
      <a href="https://sochain.com/block/BTC/${this.hash}" target="_blank" class="mt-2 explorers">SoChain</a>
          `
  }


}