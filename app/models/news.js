export default class News {
  constructor(data) {
    this.newsArray = []
    for (let i = 0; i < data.length; i++) {
      this.newsArray.push({
        url: data[i].url,
        source: data[i].source_info.name,
        title: data[i].title
      })
    }

    this.sources = ''
    for (let i = 0; i < data.length; i++) {
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
        <div class="card my-2  ">
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
    return `
    <p>${this.sources.split(" | ").length} Sources: ${this.sources}</p>
    `
  }

}