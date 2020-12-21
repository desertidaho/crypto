export default class Hashrate {
  constructor(data) {
    this.hashrate = data.hashrate
  }

  hashrateTemplate() {
    this.hashrate = this.hashrate.slice(0, 3) + '.' + this.hashrate.slice(4, 6) + ' EH/s'
    return `
            <a href="https://sochain.com/btc" target="_blank" class="blockData">Bitcoin Hashrate ${this.hashrate}</a>
          `
  }


}