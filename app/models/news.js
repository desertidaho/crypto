export default class News {
  constructor(data) {
    this.newsArray = []
    for (let i = 0; i < data.length; i++) {
      this.newsArray.push({
        url: data[i].url,
        source: data[i].source_info.name,
        title: data[i].title,
        sourceUrl: data[i].source,
        img: data[i].imageurl
      })

      this.sources = ''
      if (this.sources.includes(data[i].source_info.name)) {
        continue
      }
      else {
        this.sources += (data[i].source_info.name) + ' | '
      }
    }

  }

  newsTemplate() {
    let template = ""
    for (let i = 0; i <= this.newsArray.length - 1; i++) {
      template += `
      <a href="${[this.newsArray[i].url]}" target="_blank">
        <div class="card my-2">
        <img class="card-img-top" src="${this.newsArray[i].img}" alt="Card image">
            <div class="card-body">
              <h6 class="card-title">${this.newsArray[i].title}... [${this.newsArray[i].source}]</h6>
            </div>
        </div>
      </a>
      `
    }
    return template
  }

  sourcesTemplate() {
    let template = ""
    for (let i = 0; i <= this.newsArray.length - 1; i++) {
      if (template.includes(this.newsArray[i].source)) {
        continue
      }
      else if (this.newsArray[i].source == "Decrypt") {
        template +=
          `
        <a href="https://${[this.newsArray[i].sourceUrl]}.co" target="_blank" style="text-decoration:none;">
          <span class="mr-3">${this.newsArray[i].source}</span>
        </a>
      `
      }
      else if (this.newsArray[i].source == "TheBlock") {
        template +=
          `
        <a href="https://${[this.newsArray[i].sourceUrl]}crypto.com" target="_blank" style="text-decoration:none;">
          <span class="mr-3">${this.newsArray[i].source}</span>
        </a>
      `
      }
      else if (this.newsArray[i].source == "Bitcoin.com") {
        template +=
          `
        <a href="https://news.${[this.newsArray[i].sourceUrl]}" target="_blank" style="text-decoration:none;">
          <span class="mr-3">${this.newsArray[i].source}</span>
        </a>
      `
      }
      else if (this.newsArray[i].source == "Chaindd") {
        template +=
          `
        <a href="https://english.${[this.newsArray[i].sourceUrl]}.com" target="_blank" style="text-decoration:none;">
          <span class="mr-3">${this.newsArray[i].source}</span>
        </a>
      `
      }
      else {
        template +=
          `
        <a href="https://${[this.newsArray[i].sourceUrl]}.com" target="_blank" style="text-decoration:none;">
          <span class="mr-3">${this.newsArray[i].source}</span>
        </a>
      `
      }
    }
    console.log(template)
    return template
  }

}