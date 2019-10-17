export default class News {
  constructor(data) {
    this.url0 = data[0].url;
    this.source0 = data[0].source_info.name;
    this.title0 = data[0].title;

    this.url1 = data[1].url;
    this.source1 = data[1].source_info.name;
    this.title1 = data[1].title;

    this.url2 = data[2].url;
    this.source2 = data[2].source_info.name;
    this.title2 = data[2].title;

    this.url3 = data[3].url;
    this.source3 = data[3].source_info.name;
    this.title3 = data[3].title;

    this.url4 = data[4].url;
    this.source4 = data[4].source_info.name;
    this.title4 = data[4].title;

    this.url5 = data[5].url;
    this.source5 = data[5].source_info.name;
    this.title5 = data[5].title;

    this.url6 = data[6].url;
    this.source6 = data[6].source_info.name;
    this.title6 = data[6].title;

    this.url7 = data[7].url;
    this.source7 = data[7].source_info.name;
    this.title7 = data[7].title;

    this.url8 = data[8].url;
    this.source8 = data[8].source_info.name;
    this.title8 = data[8].title;

    this.url9 = data[9].url;
    this.source9 = data[9].source_info.name;
    this.title9 = data[9].title;

    this.url10 = data[10].url;
    this.source10 = data[10].source_info.name;
    this.title10 = data[10].title;

    this.url11 = data[11].url;
    this.source11 = data[11].source_info.name;
    this.title11 = data[11].title;

    this.url12 = data[12].url;
    this.source12 = data[12].source_info.name;
    this.title12 = data[12].title;

    this.url13 = data[13].url;
    this.source13 = data[13].source_info.name;
    this.title13 = data[13].title;

    this.url14 = data[14].url;
    this.source14 = data[14].source_info.name;
    this.title14 = data[14].title;

    this.url15 = data[15].url;
    this.source15 = data[15].source_info.name;
    this.title15 = data[15].title;

    this.url16 = data[16].url;
    this.source16 = data[16].source_info.name;
    this.title16 = data[16].title;

    this.url17 = data[17].url;
    this.source17 = data[17].source_info.name;
    this.title17 = data[17].title;

    this.url18 = data[18].url;
    this.source18 = data[18].source_info.name;
    this.title18 = data[18].title;

    this.url19 = data[19].url;
    this.source19 = data[19].source_info.name;
    this.title19 = data[19].title;

    this.url20 = data[20].url;
    this.source20 = data[20].source_info.name;
    this.title20 = data[20].title;

    this.url21 = data[21].url;
    this.source21 = data[21].source_info.name;
    this.title21 = data[21].title;

    this.url22 = data[22].url;
    this.source22 = data[22].source_info.name;
    this.title22 = data[22].title;

    this.url23 = data[23].url;
    this.source23 = data[23].source_info.name;
    this.title23 = data[23].title;

    this.url24 = data[24].url;
    this.source24 = data[24].source_info.name;
    this.title24 = data[24].title;

    this.url25 = data[25].url;
    this.source25 = data[25].source_info.name;
    this.title25 = data[25].title;

    this.url26 = data[26].url;
    this.source26 = data[26].source_info.name;
    this.title26 = data[26].title;

    this.url27 = data[27].url;
    this.source27 = data[27].source_info.name;
    this.title27 = data[27].title;

    this.url28 = data[28].url;
    this.source28 = data[28].source_info.name;
    this.title28 = data[28].title;

    this.url29 = data[29].url;
    this.source29 = data[29].source_info.name;
    this.title29 = data[29].title;

    this.url30 = data[30].url;
    this.source30 = data[30].source_info.name;
    this.title30 = data[30].title;

    this.url31 = data[31].url;
    this.source31 = data[31].source_info.name;
    this.title31 = data[31].title;

    this.url32 = data[32].url;
    this.source32 = data[32].source_info.name;
    this.title32 = data[32].title;

    this.url33 = data[33].url;
    this.source33 = data[33].source_info.name;
    this.title33 = data[33].title;

    this.url34 = data[34].url;
    this.source34 = data[34].source_info.name;
    this.title34 = data[34].title;

    this.url35 = data[35].url;
    this.source35 = data[35].source_info.name;
    this.title35 = data[35].title;

    this.url36 = data[36].url;
    this.source36 = data[36].source_info.name;
    this.title36 = data[36].title;

    this.url37 = data[37].url;
    this.source37 = data[37].source_info.name;
    this.title37 = data[37].title;

    this.url38 = data[38].url;
    this.source38 = data[38].source_info.name;
    this.title38 = data[38].title;

    this.url39 = data[39].url;
    this.source39 = data[39].source_info.name;
    this.title39 = data[39].title;

    this.url40 = data[40].url;
    this.source40 = data[40].source_info.name;
    this.title40 = data[40].title;

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
    return `
<a href="${this.url0}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source0}] ${this.title0}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url1}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
            <h6 class="card-title">[${this.source1}] ${this.title1}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url2}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
            <h6 class="card-title">[${this.source2}] ${this.title2}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url3}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
            <h6 class="card-title">[${this.source3}] ${this.title3}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url4}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source4}] ${this.title4}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url5}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source5}] ${this.title5}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url6}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source6}] ${this.title6}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url7}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source7}] ${this.title7}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url8}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source8}] ${this.title8}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url9}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source9}] ${this.title9}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url10}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source10}] ${this.title10}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url11}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source11}] ${this.title11}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url12}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source12}] ${this.title12}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url13}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source13}] ${this.title13}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url14}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source14}] ${this.title14}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url15}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source15}] ${this.title15}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url16}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source16}] ${this.title16}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url17}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source17}] ${this.title17}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url18}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source18}] ${this.title18}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url19}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source19}] ${this.title19}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url20}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source20}] ${this.title20}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url21}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source21}] ${this.title21}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url22}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source22}] ${this.title22}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url23}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source23}] ${this.title23}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url24}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source24}] ${this.title24}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url25}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source25}] ${this.title25}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url26}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source26}] ${this.title26}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url27}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source27}] ${this.title27}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url28}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source28}] ${this.title28}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url29}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source29}] ${this.title29}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url30}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source30}] ${this.title30}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url31}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source31}] ${this.title31}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url32}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source32}] ${this.title32}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url33}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source33}] ${this.title33}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url34}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source34}] ${this.title34}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url35}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source35}] ${this.title35}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url36}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source36}] ${this.title36}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url37}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source37}] ${this.title37}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url38}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source38}] ${this.title38}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url39}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source39}] ${this.title39}...</h6>
            </div>
        </div>
      </a>

<a href="${this.url40}" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">[${this.source40}] ${this.title40}...</h6>
            </div>
        </div>
      </a>
          `
  }


  sourcesTemplate() {
    return `
    <p>${this.sources}</p>
    `
  }

}