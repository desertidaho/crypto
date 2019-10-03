export default class News {
  constructor(data) {
    this.url0 = data[0].url;
    this.title0 = data[0].title;

    this.url1 = data[1].url;
    this.title1 = data[1].title;

    this.url2 = data[2].url;
    this.title2 = data[2].title;

    this.url3 = data[3].url;
    this.title3 = data[3].title;

    this.url4 = data[4].url;
    this.title4 = data[4].title;

    this.url5 = data[5].url;
    this.title5 = data[5].title;

    this.url6 = data[6].url;
    this.title6 = data[6].title;

    this.url7 = data[7].url;
    this.title7 = data[7].title;

    this.url8 = data[8].url;
    this.title8 = data[8].title;

    this.url9 = data[9].url;
    this.title9 = data[9].title;

    this.url10 = data[10].url;
    this.title10 = data[10].title;

    this.url11 = data[11].url;
    this.title11 = data[11].title;

    this.url12 = data[12].url;
    this.title12 = data[12].title;

    this.url13 = data[13].url;
    this.title13 = data[13].title;

    this.url14 = data[14].url;
    this.title14 = data[14].title;

    this.url15 = data[15].url;
    this.title15 = data[15].title;

    this.url16 = data[16].url;
    this.title16 = data[16].title;

    this.url17 = data[17].url;
    this.title17 = data[17].title;

    this.url18 = data[18].url;
    this.title18 = data[18].title;

    this.url19 = data[19].url;
    this.title19 = data[19].title;

    this.url20 = data[20].url;
    this.title20 = data[20].title;

    this.url21 = data[21].url;
    this.title21 = data[21].title;

    this.url22 = data[22].url;
    this.title22 = data[22].title;

    this.url23 = data[23].url;
    this.title23 = data[23].title;

    this.url24 = data[24].url;
    this.title24 = data[24].title;

    this.url25 = data[25].url;
    this.title25 = data[25].title;

    this.url26 = data[26].url;
    this.title26 = data[26].title;

    this.url27 = data[27].url;
    this.title27 = data[27].title;

    this.url28 = data[28].url;
    this.title28 = data[28].title;

    this.url29 = data[29].url;
    this.title29 = data[29].title;

    this.url30 = data[30].url;
    this.title30 = data[30].title;

    this.url31 = data[31].url;
    this.title31 = data[31].title;

    this.url32 = data[32].url;
    this.title32 = data[32].title;

    this.url33 = data[33].url;
    this.title33 = data[33].title;

    this.url34 = data[34].url;
    this.title34 = data[34].title;

    this.url35 = data[35].url;
    this.title35 = data[35].title;

    this.url36 = data[36].url;
    this.title36 = data[36].title;

    this.url37 = data[37].url;
    this.title37 = data[37].title;

    this.url38 = data[38].url;
    this.title38 = data[38].title;

    this.url39 = data[39].url;
    this.title39 = data[39].title;

    this.url40 = data[40].url;
    this.title40 = data[40].title;

  }

  newsTemplate() {
    return `
<a href="${this.url0}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title0}</h6>
            </div>
        </div>
      </a>

<a href="${this.url1}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title1}</h6>
            </div>
        </div>
      </a>

<a href="${this.url2}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title2}</h6>
            </div>
        </div>
      </a>

<a href="${this.url3}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title3}</h6>
            </div>
        </div>
      </a>

<a href="${this.url4}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title4}</h6>
            </div>
        </div>
      </a>

<a href="${this.url5}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title5}</h6>
            </div>
        </div>
      </a>

<a href="${this.url6}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title6}</h6>
            </div>
        </div>
      </a>

<a href="${this.url7}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title7}</h6>
            </div>
        </div>
      </a>

<a href="${this.url8}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title8}</h6>
            </div>
        </div>
      </a>

<a href="${this.url9}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title9}</h6>
            </div>
        </div>
      </a>

<a href="${this.url10}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title10}</h6>
            </div>
        </div>
      </a>

<a href="${this.url11}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title11}</h6>
            </div>
        </div>
      </a>

<a href="${this.url12}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title12}</h6>
            </div>
        </div>
      </a>

<a href="${this.url13}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title13}</h6>
            </div>
        </div>
      </a>

<a href="${this.url14}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title14}</h6>
            </div>
        </div>
      </a>

<a href="${this.url15}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title15}</h6>
            </div>
        </div>
      </a>

<a href="${this.url16}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title16}</h6>
            </div>
        </div>
      </a>

<a href="${this.url17}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title17}</h6>
            </div>
        </div>
      </a>

<a href="${this.url18}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title18}</h6>
            </div>
        </div>
      </a>

<a href="${this.url19}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title19}</h6>
            </div>
        </div>
      </a>

<a href="${this.url20}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title20}</h6>
            </div>
        </div>
      </a>

<a href="${this.url21}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title21}</h6>
            </div>
        </div>
      </a>

<a href="${this.url22}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title22}</h6>
            </div>
        </div>
      </a>

<a href="${this.url23}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title23}</h6>
            </div>
        </div>
      </a>

<a href="${this.url24}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title24}</h6>
            </div>
        </div>
      </a>

<a href="${this.url25}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title25}</h6>
            </div>
        </div>
      </a>

<a href="${this.url26}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title26}</h6>
            </div>
        </div>
      </a>

<a href="${this.url27}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title27}</h6>
            </div>
        </div>
      </a>

<a href="${this.url28}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title28}</h6>
            </div>
        </div>
      </a>

<a href="${this.url29}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title29}</h6>
            </div>
        </div>
      </a>

<a href="${this.url30}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title30}</h6>
            </div>
        </div>
      </a>

<a href="${this.url31}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title31}</h6>
            </div>
        </div>
      </a>

<a href="${this.url32}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title32}</h6>
            </div>
        </div>
      </a>

<a href="${this.url33}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title33}</h6>
            </div>
        </div>
      </a>

<a href="${this.url34}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title34}</h6>
            </div>
        </div>
      </a>

<a href="${this.url35}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title35}</h6>
            </div>
        </div>
      </a>

<a href="${this.url36}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title36}</h6>
            </div>
        </div>
      </a>

<a href="${this.url37}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title37}</h6>
            </div>
        </div>
      </a>

<a href="${this.url38}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title38}</h6>
            </div>
        </div>
      </a>

<a href="${this.url39}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title39}</h6>
            </div>
        </div>
      </a>

<a href="${this.url40}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.title40}</h6>
            </div>
        </div>
      </a>

          `
  }

}