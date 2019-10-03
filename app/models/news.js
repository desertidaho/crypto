export default class News {
  constructor(data) {
    this.img = data[0].imageurl;
    this.title = data[0].title;
    this.url = data[0].url;
  }

  newsTemplate() {
    return `
      <a href="${this.url}" target="_blank">
        <div class="card mx-3 my-3 shadow">
          <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
            </div>
        </div>
      </a>
          `
  }

}