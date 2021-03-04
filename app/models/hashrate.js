export default class Hashrate {
  constructor(data) {
    this.hashrate = data.hashrate
  }

  hashrateTemplate() {
    this.hashrate = this.hashrate.slice(0, 3) + '.' + this.hashrate.slice(4, 6) + ' EH/s'
    return `
            <a href="https://www.blockchain.com/charts/hash-rate" target="" class="blockData">Bitcoin Hashrate ${this.hashrate}</a>
          `
  }


}